import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AdminDashboard() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10" style={{ backgroundColor: "#141a2b" }}>
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold text-white">Admin</h1>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large area chart */}
        <div className="lg:col-span-8">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Student Mood Analytics <span className="text-sm text-[#7ee0b8] ml-3">+12%</span></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 rounded-lg overflow-hidden bg-transparent">
                <svg viewBox="0 0 800 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7f5af0" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#5ddcff" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff8bd6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#7f5af0" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>

                  <path d="M0,140 C80,100 160,120 240,90 C320,60 400,120 480,70 C560,20 640,120 720,90 L800,90 L800,200 L0,200 Z"
                    fill="url(#g1)" opacity="0.9" />
                  <path d="M0,150 C80,110 160,130 240,100 C320,70 400,130 480,80 C560,30 640,130 720,100"
                    stroke="url(#g2)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column small bar chart */}
        <div className="lg:col-span-4 grid grid-rows-[1fr_auto] gap-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Login Streaks</CardTitle>
              <div className="text-sm text-[#9fb0c9]">25 <span className="text-xs text-[#7ee0b8] ml-2">Last 30 Days +5%</span></div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-40 flex items-end justify-between gap-3">
                { [1,2,3,5,7,4,1].map((h,i)=>(
                  <div key={i} className="flex-1 flex items-end justify-center">
                    <div style={{ height: `${h*8 + 8}px` }} className="w-11/12 rounded-t-md bg-gradient-to-b from-[#ff9edb] via-[#7f5af0] to-[#5ddcff]" />
                  </div>
                )) }
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent>
              <div className="text-sm text-[#a0aec0] mb-3">Engagement Metrics <span className="text-xs text-[#7ee0b8] ml-2">+8%</span></div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-[#9fb0c9] mb-1">
                    <span>Active Users</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-2 rounded-md bg-[#141827]" />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#9fb0c9] mb-1">
                    <span>Content Views</span>
                    <span>54%</span>
                  </div>
                  <Progress value={54} className="h-2 rounded-md bg-[#141827]" />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#9fb0c9] mb-1">
                    <span>Support Interactions</span>
                    <span>28%</span>
                  </div>
                  <Progress value={28} className="h-2 rounded-md bg-[#141827]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform usage insights (full width) */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Platform Usage Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[#9fb0c9] mb-4">
                Summary of platform usage over the past month, including user engagement, content consumption,
                and support interactions. Use this to identify trends and take action.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-md bg-[#0b1220]/30 border border-[#1f2937]">
                  <div className="text-xs text-[#9fb0c9]">Average Session Length</div>
                  <div className="text-lg text-white font-semibold mt-2">12m 34s</div>
                </div>

                <div className="p-4 rounded-md bg-[#0b1220]/30 border border-[#1f2937]">
                  <div className="text-xs text-[#9fb0c9]">Monthly Active</div>
                  <div className="text-lg text-white font-semibold mt-2">4,512</div>
                </div>

                <div className="p-4 rounded-md bg-[#0b1220]/30 border border-[#1f2937]">
                  <div className="text-xs text-[#9fb0c9]">Support Tickets</div>
                  <div className="text-lg text-white font-semibold mt-2">128</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}