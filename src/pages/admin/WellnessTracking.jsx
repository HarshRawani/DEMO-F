import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Activity, Moon, Brain } from "lucide-react";

export default function WellnessTracking() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10" >
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-white">Wellness Tracking</h1>
        <p className="text-[#a0aec0] mt-2">Monitor student engagement in wellness activities and trends</p>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Wellness Metrics */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#ff6b8a]" />
                <div>
                  <div className="text-2xl font-bold text-white">72%</div>
                  <div className="text-sm text-[#a0aec0]">Meditation Engagement</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Activity className="w-8 h-8 text-[#6bcf7f]" />
                <div>
                  <div className="text-2xl font-bold text-white">68%</div>
                  <div className="text-sm text-[#a0aec0]">Exercise Tracking</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Moon className="w-8 h-8 text-[#7f5af0]" />
                <div>
                  <div className="text-2xl font-bold text-white">45%</div>
                  <div className="text-sm text-[#a0aec0]">Sleep Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Brain className="w-8 h-8 text-[#5ddcff]" />
                <div>
                  <div className="text-2xl font-bold text-white">89%</div>
                  <div className="text-sm text-[#a0aec0]">Mood Tracking</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder content */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Wellness Activities Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a0aec0]">Detailed wellness tracking implementation coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}