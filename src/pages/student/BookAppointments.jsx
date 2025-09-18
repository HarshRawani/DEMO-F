// FIXED VERSION: src/pages/student/BookAppointments.jsx
import React, { useState, useEffect } from "react";
import {
  Star,
  Calendar,
  Filter,
  Search,
  MapPin,
  Clock,
  CheckCircle,
  Loader,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/config/axiosInstance";
// Simple Booking Modal Component (inline to avoid import issues)
const BookingModal = ({ counselor, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    topic: "",
    mode: "online",
    date: "",
    preferredTime: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.topic || !formData.date || !formData.preferredTime) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);
    try {
      // Mock booking for now
      setTimeout(() => {
        onSuccess({ id: Date.now() });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please try again.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#141a2b] border border-[#2a3550] rounded-xl shadow-2xl p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold text-white mb-4">
          Book Appointment
        </h2>

        <div className="bg-[#1c2337] rounded-lg p-4 mb-4">
          <h3 className="text-white font-medium">
            {counselor?.name || counselor?.user?.name}
          </h3>
          <p className="text-[#a0aec0] text-sm">{counselor?.specialization}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              Topic
            </label>
            <Input
              value={formData.topic}
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
              placeholder="What would you like to discuss?"
              className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
              required
            />
          </div>

          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              Mode
            </label>
            <select
              value={formData.mode}
              onChange={(e) =>
                setFormData({ ...formData, mode: e.target.value })
              }
              className="w-full px-3 py-2 bg-[#1c2337] border border-[#2a3550] text-[#e0e6f6] rounded-lg"
            >
              <option value="online">Online</option>
              <option value="offline">In-Person</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#e0e6f6] font-medium mb-2">
                Date
              </label>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                min={new Date().toISOString().split("T")[0]}
                className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
                required
              />
            </div>
            <div>
              <label className="block text-[#e0e6f6] font-medium mb-2">
                Time
              </label>
              <Input
                type="time"
                value={formData.preferredTime}
                onChange={(e) =>
                  setFormData({ ...formData, preferredTime: e.target.value })
                }
                className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-[#2a3550] text-[#a0aec0]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-[#7f5af0] hover:bg-[#6d28d9] text-white"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function BookAppointments() {
  const [counselors, setCounselors] = useState([]);
  const [filteredCounselors, setFilteredCounselors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Mock data with proper structure
  const mockCounselors = [
    {
      _id: "1",
      name: "Dr. Komal Gupta",
      specialization: "Clinical Psychologist",
      languages: ["English", "Hindi"],
      experience: 5,
      rating: 4.8,
      totalReviews: 120,
      location: "Online",
      availability: "Mon-Fri 9AM-5PM",
      description: "Specialized in anxiety, depression, and stress management.",
      avatar: null,
    },
    {
      _id: "2",
      name: "Dr. Shruti Gupta",
      specialization: "Clinical Psychologist",
      languages: ["English", "Hindi"],
      experience: 5,
      rating: 4.5,
      totalReviews: 150,
      location: "Online",
      availability: "Tue-Sat 10AM-6PM",
      description:
        "Expert in cognitive behavioral therapy and mindfulness practices.",
      avatar: null,
    },
    {
      _id: "3",
      name: "Dr. Vidush P",
      specialization: "Therapist",
      languages: ["English", "Hindi"],
      experience: 6,
      rating: 3.8,
      totalReviews: 78,
      location: "Online",
      availability: "Mon-Wed-Fri 11AM-4PM",
      description:
        "Focuses on relationship counseling and personal development.",
      avatar: null,
    },
    {
      _id: "4",
      name: "Dr. Harsh R",
      specialization: "Clinical Psychologist",
      languages: ["English"],
      experience: 5,
      rating: 4.8,
      totalReviews: 192,
      location: "Online",
      availability: "Daily 9AM-8PM",
      description: "Specialized in trauma therapy and PTSD treatment.",
      avatar: null,
    },
    {
      _id: "5",
      name: "Dr. Bhumi K",
      specialization: "Psychiatrist",
      languages: ["English", "Hindi"],
      experience: 8,
      rating: 4.5,
      totalReviews: 95,
      location: "Online",
      availability: "Mon-Thu 2PM-7PM",
      description:
        "Expert in medication management and psychiatric evaluations.",
      avatar: null,
    },
    {
      _id: "6",
      name: "Dr. Ritik Yadav",
      specialization: "Child Psychologist",
      languages: ["English", "Hindi"],
      experience: 6,
      rating: 4.7,
      totalReviews: 89,
      location: "Online",
      availability: "Weekdays 10AM-5PM",
      description: "Specializes in child and adolescent mental health.",
      avatar: null,
    },
  ];

  async function fetchCounselors() {
    try {
      setLoading(true);

      try {
        const response = await axiosInstance.get("/counselors", {
          withCredentials: true
        });
        console.log("counselors API response:", response);

        // Handle multiple possible response shapes
        const apiCounselors =
          response?.data?.data?.counselors ||
          response?.data?.counselors ||
          response?.data?.data ||
          response?.data ||
          [];

        // Normalize the API data structure safely
        const normalizedCounselors = (apiCounselors || []).map((counselor) => ({
          _id: counselor._id || counselor.id || counselor.user?._id || Date.now().toString(),
          name: counselor.name || counselor.user?.name || counselor.fullName,
          specialization:
            counselor.profile?.specialization || counselor.specialization || counselor.role || "Mental Health Professional",
          languages: counselor.profile?.languages || counselor.languages || ["English"],
          experience: counselor.profile?.experience || counselor.experience || 0,
          rating: counselor.profile?.rating || counselor.rating || 4.0,
          totalReviews: counselor.profile?.totalReviews || counselor.totalReviews || 0,
          location: counselor.profile?.location || counselor.location || "Online",
          availability: counselor.profile?.availability || counselor.availability || "Available",
          description: counselor.profile?.description || counselor.description || "Mental health professional",
          avatar: counselor.avatar || counselor.user?.avatar || null,
        }));

        // If API responded with empty array, fall back to mock (optional)
        if (!normalizedCounselors.length) {
          console.warn("No counselors returned from API — using mock data");
          setCounselors(mockCounselors);
        } else {
          setCounselors(normalizedCounselors);
        }
      } catch (apiError) {
        console.warn("API fetch failed — using mock data", apiError);
        setCounselors(mockCounselors);
      }
    } catch (error) {
      console.error("Unexpected error while fetching counselors:", error);
      setCounselors(mockCounselors);
    } finally {
      setLoading(false);
    }
  }

  // This useEffect should be placed here, before other functions
  useEffect(() => {
    console.log("useEffect called → fetching counselors");
    fetchCounselors();
  }, []);

  const filterCounselors = () => {
    let filtered = [...counselors];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (counselor) =>
          (counselor.name || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (counselor.specialization || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    // Specialization filter
    if (selectedSpecialization !== "all") {
      filtered = filtered.filter((counselor) =>
        (counselor.specialization || "")
          .toLowerCase()
          .includes(selectedSpecialization.toLowerCase())
      );
    }

    // Rating filter
    if (selectedRating !== "all") {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter(
        (counselor) => (counselor.rating || 0) >= minRating
      );
    }

    // Experience filter
    if (selectedExperience !== "all") {
      const minExperience = parseInt(selectedExperience);
      filtered = filtered.filter(
        (counselor) => (counselor.experience || 0) >= minExperience
      );
    }

    setFilteredCounselors(filtered);
  };

  useEffect(() => {
    filterCounselors();
  }, [
    counselors,
    searchTerm,
    selectedSpecialization,
    selectedRating,
    selectedExperience,
  ]); 

  const handleBookAppointment = (counselor) => {
    setSelectedCounselor(counselor);
    setShowBookingModal(true);
  };

  const handleBookingSuccess = (appointment) => {
    setSuccessMessage(
      `Appointment booked with ${selectedCounselor?.name} successfully!`
    );
    setShowBookingModal(false);
    setSelectedCounselor(null);

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedCounselor(null);
  };

  const renderStars = (rating) => {
    const safeRating = rating || 0;
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(safeRating)
            ? "fill-yellow-400 text-yellow-400"
            : index < safeRating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-400"
        }`}
      />
    ));
  };

  const getInitials = (name) => {
    if (!name) return "DR";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f1622] flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin w-12 h-12 text-[#7f5af0] mx-auto mb-4" />
          <p className="text-[#a0aec0]">Loading counselors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1622] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Book our Best Therapists
          </h1>
          <p className="text-[#a0aec0] text-lg">
            Find the perfect mental health professional for your needs
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-300">
              <CheckCircle className="w-5 h-5" />
              <p>{successMessage}</p>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a0aec0] w-4 h-4" />
            <Input
              placeholder="Search counselors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
            />
          </div>

          {/* Specialization Filter */}
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            className="px-3 py-2 bg-[#1c2337] border border-[#2a3550] text-[#e0e6f6] rounded-lg focus:ring-2 focus:ring-[#7f5af0]"
          >
            <option value="all">All Specializations</option>
            <option value="clinical">Clinical Psychologist</option>
            <option value="therapist">Therapist</option>
            <option value="psychiatrist">Psychiatrist</option>
            <option value="child">Child Psychologist</option>
          </select>

          {/* Rating Filter */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="px-3 py-2 bg-[#1c2337] border border-[#2a3550] text-[#e0e6f6] rounded-lg focus:ring-2 focus:ring-[#7f5af0]"
          >
            <option value="all">All Ratings</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
          </select>

          {/* Experience Filter */}
          <select
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="px-3 py-2 bg-[#1c2337] border border-[#2a3550] text-[#e0e6f6] rounded-lg focus:ring-2 focus:ring-[#7f5af0]"
          >
            <option value="all">All Experience</option>
            <option value="5">5+ Years</option>
            <option value="3">3+ Years</option>
            <option value="1">1+ Years</option>
          </select>

          {/* Clear Filters */}
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedSpecialization("all");
              setSelectedRating("all");
              setSelectedExperience("all");
            }}
            className="border-[#2a3550] text-[#a0aec0] hover:bg-[#2a3550] hover:text-white"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-[#a0aec0]">
            Showing {filteredCounselors.length} of {counselors.length}{" "}
            counselors
          </p>
        </div>

        {/* Counselors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCounselors.map((counselor) => (
            <Card
              key={counselor._id}
              className="bg-[#141a2b] border-[#2a3550] hover:border-[#7f5af0]/50 transition-colors"
            >
              <CardContent className="p-6">
                {/* Profile Picture */}
                <div className="text-center mb-4">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-[#2a3550] mb-3">
                    <AvatarImage
                      src={counselor.avatar}
                      alt={counselor.name || "Counselor"}
                    />
                    <AvatarFallback className="bg-[#7f5af0] text-white text-xl">
                      {getInitials(counselor.name)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {counselor.name || "Unknown Counselor"}
                  </h3>

                  {/* Specialization */}
                  <p className="text-[#a0aec0] text-sm mb-2">
                    {counselor.specialization || "Mental Health Professional"}
                  </p>

                  {/* Languages */}
                  <div className="flex justify-center gap-1 mb-3">
                    {(counselor.languages || ["English"]).map((lang, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-[#2a3550] text-[#e0e6f6]"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(counselor.rating)}
                    <span className="text-white font-medium ml-2">
                      {counselor.rating || 0}
                    </span>
                    <span className="text-[#a0aec0] text-sm">
                      ({counselor.totalReviews || 0} reviews)
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div className="text-center mb-4">
                  <div className="bg-[#7f5af0] text-white text-sm font-medium px-3 py-1 rounded-full inline-block">
                    {counselor.experience || 0} years experience
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-center text-[#a0aec0] text-sm mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  {counselor.availability || "Available"}
                </div>

                {/* Location */}
                <div className="flex items-center justify-center text-[#a0aec0] text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {counselor.location || "Online"}
                </div>

                {/* Book Appointment Button */}
                <Button
                  onClick={() => handleBookAppointment(counselor)}
                  className="w-full bg-gradient-to-r from-[#c084fc] to-[#7f5af0] hover:from-[#a855f7] hover:to-[#6d28d9] text-white font-medium"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCounselors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-[#a0aec0] mb-4">
              <Search className="w-16 h-16 mx-auto opacity-50 mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">
                No counselors found
              </h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialization("all");
                setSelectedRating("all");
                setSelectedExperience("all");
              }}
              className="bg-[#7f5af0] hover:bg-[#6d28d9] text-white"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedCounselor && (
        <BookingModal
          counselor={selectedCounselor}
          isOpen={showBookingModal}
          onClose={handleCloseModal}
          onSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
}
