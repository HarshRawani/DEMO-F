import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacySecurity() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10"
        style={{ backgroundColor: "#141a2b" }}
    >
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-white">Privacy & Security</h1>
        <p className="text-[#a0aec0] mt-2">Manage data protection and security settings</p>
      </header>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Security Status */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-[#6bcf7f]" />
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-[#a0aec0]">Data Encrypted</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Lock className="w-8 h-8 text-[#5ddcff]" />
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-[#a0aec0]">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-[#ffa726]" />
                <div>
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-sm text-[#a0aec0]">Data Breaches</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#7f5af0]" />
                <div>
                  <div className="text-2xl font-bold text-white">GDPR</div>
                  <div className="text-sm text-[#a0aec0]">Compliant</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder content */}
        <div className="lg:col-span-12">
          <Card className="bg-[#0d1220]/60 border border-[#263044]">
            <CardHeader>
              <CardTitle className="text-white">Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#a0aec0]">Advanced privacy and security management coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}