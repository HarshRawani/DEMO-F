import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Send, Users, Calendar } from "lucide-react";

export default function Announcements() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Announcements</h1>
          <p className="text-[#a0aec0] mt-2">Create and manage announcements for classes and groups</p>
        </div>
        <Button className="bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </Button>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Stats */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Send className="w-8 h-8 text-[#5ddcff]" />
                <div>
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-sm text-[#a0aec0]">Total Sent</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-[#6bcf7f]" />
                <div>
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-sm text-[#a0aec0]">Students Reached</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-[#ffa726]" />
                <div>
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-[#a0aec0]">Scheduled</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#7f5af0] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">%</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">92%</div>
                  <div className="text-sm text-[#a0aec0]">Read Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder content */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a0aec0]">Announcement management system implementation coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}