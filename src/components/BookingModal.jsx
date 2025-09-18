// Create: src/components/BookingModal.jsx

import React, { useState } from "react";
import { Calendar, Clock, MessageSquare, X, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axiosInstance from "@/config/axiosInstance";

const BookingModal = ({ counselor, isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    mode: "online",
    date: "",
    preferredTime: "",
    duration: 50,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Validate form
      const newErrors = {};
      if (!formData.topic.trim()) newErrors.topic = "Topic is required";
      if (!formData.date) newErrors.date = "Date is required";
      if (!formData.preferredTime) newErrors.preferredTime = "Time is required";

      // Check if date is in the future
      const selectedDate = new Date(
        `${formData.date}T${formData.preferredTime}`
      );
      if (selectedDate <= new Date()) {
        newErrors.date = "Please select a future date and time";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      const response = await axiosInstance.post(
        `/counselors/${counselor._id}/book`,
        {
          ...formData,
          date: `${formData.date}T${formData.preferredTime}:00.000Z`,
        }
      );

      onSuccess(response.data.data);
      onClose();

      // Reset form
      setFormData({
        topic: "",
        description: "",
        mode: "online",
        date: "",
        preferredTime: "",
        duration: 50,
      });
    } catch (error) {
      console.error("Booking error:", error);
      setErrors({
        general: error.response?.data?.message || "Failed to book appointment",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#141a2b] border border-[#2a3550] rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Book Appointment</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[#a0aec0] hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Counselor Info */}
        <div className="bg-[#1c2337] rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#7f5af0] flex items-center justify-center text-white font-semibold">
              {counselor.user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
            <div>
              <h3 className="text-white font-medium">{counselor.user?.name}</h3>
              <p className="text-[#a0aec0] text-sm">
                {counselor.specialization}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-300 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Topic */}
          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              What would you like to discuss?
            </label>
            <Input
              value={formData.topic}
              onChange={(e) =>
                setFormData({ ...formData, topic: e.target.value })
              }
              placeholder="e.g., Anxiety, Study stress, Relationship issues"
              className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
            />
            {errors.topic && (
              <p className="text-red-300 text-sm mt-1">{errors.topic}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              Additional Details (Optional)
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Provide any additional context..."
              className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6] min-h-[80px]"
              maxLength={1000}
            />
            <p className="text-[#a0aec0] text-xs mt-1">
              {formData.description.length}/1000 characters
            </p>
          </div>

          {/* Mode */}
          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              Session Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={formData.mode === "online" ? "default" : "outline"}
                onClick={() => setFormData({ ...formData, mode: "online" })}
                className={
                  formData.mode === "online"
                    ? "bg-[#7f5af0] text-white"
                    : "border-[#2a3550] text-[#a0aec0] hover:bg-[#2a3550]"
                }
              >
                <Video className="w-4 h-4 mr-2" />
                Online
              </Button>
              <Button
                type="button"
                variant={formData.mode === "offline" ? "default" : "outline"}
                onClick={() => setFormData({ ...formData, mode: "offline" })}
                className={
                  formData.mode === "offline"
                    ? "bg-[#7f5af0] text-white"
                    : "border-[#2a3550] text-[#a0aec0] hover:bg-[#2a3550]"
                }
              >
                <MapPin className="w-4 h-4 mr-2" />
                In-Person
              </Button>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#e0e6f6] font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
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
              />
              {errors.date && (
                <p className="text-red-300 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-[#e0e6f6] font-medium mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Time
              </label>
              <Input
                type="time"
                value={formData.preferredTime}
                onChange={(e) =>
                  setFormData({ ...formData, preferredTime: e.target.value })
                }
                className="bg-[#1c2337] border-[#2a3550] text-[#e0e6f6]"
              />
              {errors.preferredTime && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.preferredTime}
                </p>
              )}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-[#e0e6f6] font-medium mb-2">
              Session Duration
            </label>
            <select
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: parseInt(e.target.value) })
              }
              className="w-full px-3 py-2 bg-[#1c2337] border border-[#2a3550] text-[#e0e6f6] rounded-lg focus:ring-2 focus:ring-[#7f5af0] focus:border-transparent"
            >
              <option value={30}>30 minutes</option>
              <option value={50}>50 minutes (Standard)</option>
              <option value={90}>90 minutes (Extended)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-[#2a3550] text-[#a0aec0] hover:bg-[#2a3550] hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-[#c084fc] to-[#7f5af0] hover:from-[#a855f7] hover:to-[#6d28d9] text-white"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
