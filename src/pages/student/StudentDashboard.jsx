import React from "react";
import { Heart, BookOpen, PlayCircle } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

export default function StudentDashboard() {
  return (
    <div className="min-h-[calc(100vh-48px)] px-8 py-10">
      {/* Hero */}
      <section className="mx-auto max-w-5xl text-center">
        <Card className="rounded-2xl px-8 py-20 bg-gradient-to-b from-[#0b1220]/40 to-transparent border border-[#263044] shadow-xl">
          <CardHeader className="items-center">
            <CardTitle className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3">
              any tea I missed?
            </CardTitle>
            <p className="text-lg text-[#a0aec0] mb-8">
              Because you deserve someone who listens — really listens
            </p>
          </CardHeader>

          <CardContent>
            <form className="mx-auto max-w-2xl relative">
              <Textarea
                placeholder="Rant here bro!!"
                className="min-h-[84px] resize-none bg-transparent border border-[#263044] text-[#e6eef9] placeholder:text-[#8f9ab2]"
                aria-label="quick rant"
              />
              <Button
                type="submit"
                className="absolute right-3 bottom-3 bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black"
              >
                ↵
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Quick Metrics */}
      <section className="mx-auto max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5 bg-[#0f1622]/60 border-[#263044]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#a0aec0]">My Sessions</p>
              <h3 className="text-2xl font-semibold text-white">3 upcoming</h3>
            </div>
            <div className="p-3 rounded-md bg-white/6">
              <BookOpen className="w-5 h-5 text-[#cfe9ff]" />
            </div>
          </div>
          <div className="mt-3 text-sm text-[#9fb0c9]">Next: Counseling with Jane on Oct 10</div>
        </Card>

        <Card className="p-5 bg-[#0f1622]/60 border-[#263044]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#a0aec0]">Recommendations</p>
              <h3 className="text-2xl font-semibold text-white">5 items</h3>
            </div>
            <div className="p-3 rounded-md bg-white/6">
              <PlayCircle className="w-5 h-5 text-[#cfe9ff]" />
            </div>
          </div>
          <div className="mt-3 text-sm text-[#9fb0c9]">Articles & videos curated for you</div>
        </Card>

        <Card className="p-5 bg-[#0f1622]/60 border-[#263044]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#a0aec0]">Mood Tracker</p>
              <h3 className="text-2xl font-semibold text-white">Good</h3>
            </div>
            <div className="p-3 rounded-md bg-white/6">
              <Heart className="w-5 h-5 text-[#cfe9ff]" />
            </div>
          </div>
          <div className="mt-3 text-sm text-[#9fb0c9]">Last entry: 2 days ago</div>
          <div className="mt-4">
            <Progress value={70} className="h-2 rounded-md" />
          </div>
        </Card>
      </section>

      {/* Main content blocks */}
      <section className="mx-auto max-w-5xl mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-[#0f1622]/60 border-[#263044]">
          <CardHeader className="flex items-center justify-between">
  <CardTitle className="text-lg font-semibold text-white">Saved Chats</CardTitle>
  <div className="flex items-center gap-3">
    <Avatar>
      <AvatarImage src="/avatar-placeholder.png" alt="A" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
    <Badge>2</Badge>
  </div>
</CardHeader>
          <CardContent>
            <ScrollArea className="h-48">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm">A</div>
                  <div>
                    <div className="text-sm font-medium text-white">Anxiety check-in</div>
                    <div className="text-xs text-[#9fb0c9]">Oct 2 • 12 messages</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-sm">R</div>
                  <div>
                    <div className="text-sm font-medium text-white">Recent therapy notes</div>
                    <div className="text-xs text-[#9fb0c9]">Sep 28 • 5 messages</div>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <Button variant="ghost" className="text-white/80">View all</Button>
<Button variant="default" className="bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black">New Chat</Button>

            </div>
          </CardContent>
        </Card>

        <Card className="p-6 bg-[#0f1622]/60 border-[#263044]">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button className="py-3 bg-gradient-to-r from-[#5ddcff] to-[#7f5af0] text-black">New Session</Button>
              <Button variant="ghost" className="py-3 text-white">Mood Check</Button>
              <Button className="py-3 variant-ghost text-white">Saved Resources</Button>
              <Button className="py-3 variant-ghost text-white">Peer Support</Button>
            </div>

            <Separator className="my-4" />

            <Tabs defaultValue="resources">
              <TabsList className="mb-4">
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              <TabsContent value="resources">
                <ScrollArea className="h-40">
                  <div className="space-y-2 text-sm text-[#cfe9ff]">
                    <div className="p-3 rounded-md bg-white/3">Article: Managing exam stress</div>
                    <div className="p-3 rounded-md bg-white/3">Video: Quick breathing exercise</div>
                    <div className="p-3 rounded-md bg-white/3">Guide: Improving sleep</div>
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="notes">
                <ScrollArea className="h-40">
                  <div className="space-y-2 text-sm text-[#cfe9ff]">
                    <div className="p-3 rounded-md bg-white/3">Note: Talk points for next session</div>
                    <div className="p-3 rounded-md bg-white/3">Note: Mood patterns this month</div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Tip */}
      <section className="mx-auto max-w-5xl mt-8">
        <Card className="p-6 bg-[#0f1622]/60 border-[#263044] text-sm text-[#9fb0c9]">
          <CardContent>
            <strong className="text-white">Tip:</strong> Try the mood tracker daily — small consistent entries help track progress.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}