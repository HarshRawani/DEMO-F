import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, Users } from "lucide-react";

export default function StudentAnalytics() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-white">Student Analytics</h1>
        <p className="text-[#a0aec0] mt-2">Anonymized insights on student challenges and wellness trends</p>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Challenge Distribution */}
        <div className="lg:col-span-8">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Student Challenges Distribution</CardTitle>
              <p className="text-sm text-[#a0aec0]">Anonymized data across all classes</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Academic Pressure</span>
                    <span className="text-[#ff6b8a] font-semibold">65%</span>
                  </div>
                  <Progress value={65} className="h-3 rounded-md bg-[#141827]" />
                  <p className="text-xs text-[#a0aec0] mt-1">Most common in grades 9-12</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Social Anxiety</span>
                    <span className="text-[#7f5af0] font-semibold">45%</span>
                  </div>
                  <Progress value={45} className="h-3 rounded-md bg-[#141827]" />
                  <p className="text-xs text-[#a0aec0] mt-1">Higher in middle school grades</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Family Issues</span>
                    <span className="text-[#5ddcff] font-semibold">32%</span>
                  </div>
                  <Progress value={32} className="h-3 rounded-md bg-[#141827]" />
                  <p className="text-xs text-[#a0aec0] mt-1">Consistent across all grades</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Identity & Self-esteem</span>
                    <span className="text-[#ffd93d] font-semibold">28%</span>
                  </div>
                  <Progress value={28} className="h-3 rounded-md bg-[#141827]" />
                  <p className="text-xs text-[#a0aec0] mt-1">Peak in grades 8-10</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Sleep & Health</span>
                    <span className="text-[#6bcf7f] font-semibold">38%</span>
                  </div>
                  <Progress value={38} className="h-3 rounded-md bg-[#141827]" />
                  <p className="text-xs text-[#a0aec0] mt-1">Increasing trend in senior grades</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trends & Insights */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Monthly Trends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#6bcf7f]" />
                  <span className="text-sm text-white">Engagement</span>
                </div>
                <span className="text-[#6bcf7f] text-sm font-semibold">+12%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-[#ff6b8a]" />
                  <span className="text-sm text-white">Stress Levels</span>
                </div>
                <span className="text-[#ff6b8a] text-sm font-semibold">-8%</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#5ddcff]" />
                  <span className="text-sm text-white">Help Seeking</span>
                </div>
                <span className="text-[#5ddcff] text-sm font-semibold">+15%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Class-wise Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white">Grades 7-9</span>
                  <Badge className="bg-[#ff6b8a]/20 text-[#ff6b8a]">High</Badge>
                </div>
                <p className="text-xs text-[#a0aec0]">Academic pressure peaks</p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white">Grades 10-12</span>
                  <Badge className="bg-[#ffd93d]/20 text-[#ffd93d]">Medium</Badge>
                </div>
                <p className="text-xs text-[#a0aec0]">Career anxiety common</p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white">Grades 6-8</span>
                  <Badge className="bg-[#6bcf7f]/20 text-[#6bcf7f]">Low</Badge>
                </div>
                <p className="text-xs text-[#a0aec0]">Better coping strategies</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demographics */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Anonymized Demographics & Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-[#0b1220]/30 border border-[#1f2937] text-center">
                  <Users className="w-8 h-8 text-[#5ddcff] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">847</div>
                  <div className="text-xs text-[#a0aec0]">Total Students Analyzed</div>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1220]/30 border border-[#1f2937] text-center">
                  <AlertTriangle className="w-8 h-8 text-[#ff6b8a] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">23%</div>
                  <div className="text-xs text-[#a0aec0]">Need Extra Support</div>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1220]/30 border border-[#1f2937] text-center">
                  <TrendingUp className="w-8 h-8 text-[#6bcf7f] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-white">67%</div>
                  <div className="text-xs text-[#a0aec0]">Improved This Month</div>
                </div>

                <div className="p-4 rounded-lg bg-[#0b1220]/30 border border-[#1f2937] text-center">
                  <div className="w-8 h-8 bg-[#7f5af0] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">AI</span>
                  </div>
                  <div className="text-lg font-semibold text-white">94%</div>
                  <div className="text-xs text-[#a0aec0]">AI Accuracy Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}