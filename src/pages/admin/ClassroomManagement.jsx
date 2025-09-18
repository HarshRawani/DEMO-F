import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Copy, Users, Settings, Eye } from "lucide-react";

export default function ClassroomManagement() {
  const [classrooms] = useState([
    {
      id: 1,
      name: "Class 10-A",
      joinCode: "ABC123",
      studentCount: 28,
      batchName: "2024-25",
      active: true,
    },
    {
      id: 2,
      name: "Class 9-B",
      joinCode: "XYZ789",
      studentCount: 25,
      batchName: "2024-25",
      active: true,
    },
    {
      id: 3,
      name: "Class 8-C",
      joinCode: "DEF456",
      studentCount: 30,
      batchName: "2024-25",
      active: false,
    },
  ]);

  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Classroom Management</h1>
          <p className="text-[#a0aec0] mt-2">Manage your classrooms and join codes like Google Classroom</p>
        </div>
        <Button className="bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          Create Classroom
        </Button>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Stats */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-[#a0aec0]">Active Classrooms</div>
            </CardContent>
          </Card>
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">83</div>
              <div className="text-sm text-[#a0aec0]">Total Students</div>
            </CardContent>
          </Card>
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">28</div>
              <div className="text-sm text-[#a0aec0]">Avg. Class Size</div>
            </CardContent>
          </Card>
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-sm text-[#a0aec0]">Enrollment Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Classroom List */}
        <div className="lg:col-span-4">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Your Classrooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classrooms.map((classroom) => (
                  <div
                    key={classroom.id}
                    className="p-4 rounded-lg bg-[#0b1220]/40 border border-[#1f2937] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#7f5af0] to-[#5ddcff] rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{classroom.name.split('-')[1]}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-semibold">{classroom.name}</h3>
                          <Badge variant={classroom.active ? "default" : "secondary"}>
                            {classroom.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <div className="text-sm text-[#a0aec0] flex items-center gap-4">
                          <span>Batch: {classroom.batchName}</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {classroom.studentCount} students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right mr-4">
                        <div className="text-sm text-[#a0aec0]">Join Code</div>
                        <div className="font-mono text-white font-bold">{classroom.joinCode}</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}