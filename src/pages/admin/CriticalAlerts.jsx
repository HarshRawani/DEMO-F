import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Eye, Shield, CheckCircle } from "lucide-react";

export default function CriticalAlerts() {
  const alerts = [
    {
      id: 1,
      type: "high",
      count: 3,
      message: "Students showing severe distress patterns",
      class: "Multiple Classes",
      timestamp: "2 hours ago",
      status: "new"
    },
    {
      id: 2,
      type: "medium",
      count: 7,
      message: "Students with declining engagement",
      class: "Grades 9-10",
      timestamp: "5 hours ago",
      status: "reviewed"
    },
    {
      id: 3,
      type: "high",
      count: 2,
      message: "Crisis-related keywords detected",
      class: "Grade 8-B",
      timestamp: "1 day ago",
      status: "action_taken"
    },
    {
      id: 4,
      type: "low",
      count: 12,
      message: "Students missing regular check-ins",
      class: "All Classes",
      timestamp: "2 days ago",
      status: "monitoring"
    }
  ];

  const getAlertColor = (type) => {
    switch (type) {
      case "high": return "text-[#ff4757] bg-[#ff4757]/10";
      case "medium": return "text-[#ffa726] bg-[#ffa726]/10";
      case "low": return "text-[#66bb6a] bg-[#66bb6a]/10";
      default: return "text-[#a0aec0] bg-[#a0aec0]/10";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "new": return "bg-[#ff4757]/20 text-[#ff4757]";
      case "reviewed": return "bg-[#ffa726]/20 text-[#ffa726]";
      case "action_taken": return "bg-[#66bb6a]/20 text-[#66bb6a]";
      case "monitoring": return "bg-[#5ddcff]/20 text-[#5ddcff]";
      default: return "bg-[#a0aec0]/20 text-[#a0aec0]";
    }
  };

  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-white">Critical Alerts</h1>
        <p className="text-[#a0aec0] mt-2">AI-powered early detection system with privacy protection</p>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Alert Summary Cards */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-[#ff4757]" />
                <div>
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-sm text-[#a0aec0]">High Priority</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#ffa726]" />
                <div>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-sm text-[#a0aec0]">Medium Priority</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-[#66bb6a]" />
                <div>
                  <div className="text-2xl font-bold text-white">28</div>
                  <div className="text-sm text-[#a0aec0]">Resolved Today</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#5ddcff]" />
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-[#a0aec0]">Anonymized</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <div className="lg:col-span-8">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Active Alerts</CardTitle>
              <p className="text-sm text-[#a0aec0]">All data is anonymized and aggregated for privacy</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-4 rounded-lg bg-[#0b1220]/40 border border-[#1f2937] hover:border-[#2a3550] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-md ${getAlertColor(alert.type)}`}>
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white font-semibold">{alert.count} Students</h3>
                            <Badge className={getStatusColor(alert.status)}>
                              {alert.status.replace('_', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-[#a0aec0] text-sm mb-2">{alert.message}</p>
                          <div className="flex items-center gap-4 text-xs text-[#9fb0c9]">
                            <span>Class: {alert.class}</span>
                            <span>•</span>
                            <span>{alert.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" className="bg-[#7f5af0] hover:bg-[#7f5af0]/80">
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Detection Insights */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">AI Detection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="text-sm text-white mb-1">Pattern Recognition</div>
                <div className="text-xs text-[#a0aec0]">Detects behavioral changes in student interactions</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="text-sm text-white mb-1">Keyword Analysis</div>
                <div className="text-xs text-[#a0aec0]">Monitors for crisis-related language patterns</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="text-sm text-white mb-1">Engagement Tracking</div>
                <div className="text-xs text-[#a0aec0]">Identifies sudden drops in platform usage</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b1220]/40">
                <div className="text-sm text-white mb-1">Privacy First</div>
                <div className="text-xs text-[#a0aec0]">All analysis is anonymized and encrypted</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Response Protocol</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-6 h-6 bg-[#ff4757] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                <span className="text-[#a0aec0]">Immediate counselor notification</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-6 h-6 bg-[#ffa726] rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                <span className="text-[#a0aec0]">Anonymous intervention options</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-6 h-6 bg-[#66bb6a] rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                <span className="text-[#a0aec0]">Follow-up monitoring</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}