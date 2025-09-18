import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, DollarSign, Calendar, Star } from "lucide-react";

export default function BusinessCollaboration() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-white">Business & Collaboration</h1>
        <p className="text-[#a0aec0] mt-2">Connect with psychologists, counselors, and organizations</p>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Stats */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-[#6bcf7f]" />
                <div>
                  <div className="text-2xl font-bold text-white">$2,847</div>
                  <div className="text-sm text-[#a0aec0]">Monthly Revenue</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-[#5ddcff]" />
                <div>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-sm text-[#a0aec0]">Active Partners</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-[#ffa726]" />
                <div>
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-sm text-[#a0aec0]">Scheduled Events</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-[#ffd93d]" />
                <div>
                  <div className="text-2xl font-bold text-white">4.8</div>
                  <div className="text-sm text-[#a0aec0]">Partner Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder content */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Professional Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a0aec0]">Professional collaboration platform implementation coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}