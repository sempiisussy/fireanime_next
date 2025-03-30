import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Users, Code, Globe, Github, Twitter, Linkedin, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
    title: "About FireAnime - A Community Project",
    description: "Learn about FireAnime, a community-driven anime streaming platform created by fans, for fans.",
}

export default function AboutPage() {
    return (
        <div className="container py-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">About FireAnime</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A community-driven anime streaming platform created by fans, for fans.
                    </p>
                </div>

                <Card className="mb-12 border-primary/20">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Our Mission</CardTitle>
                        <CardDescription>What drives us forward</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-lg mb-6">
                            FireAnime was born from a simple idea: to create a platform where anime fans can discover, watch, and
                            discuss their favorite series without barriers or commercial interests.
                        </p>
                        <div className="flex justify-center">
                            <Badge className="text-base py-1 px-4 bg-primary/20 hover:bg-primary/30 text-primary border-primary/20">
                                By the community, for the community
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Heart className="mr-2 h-5 w-5 text-primary" /> Non-Profit Project
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                FireAnime is a completely non-profit initiative. We don't run ads, sell user data, or charge
                                subscription fees. Our platform is sustained entirely by community contributions and volunteer efforts.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="mr-2 h-5 w-5 text-primary" /> Community-Driven
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Every aspect of FireAnime is shaped by our community. From content curation to feature development, we
                                rely on passionate anime fans who volunteer their time and expertise to make this platform better for
                                everyone.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Code className="mr-2 h-5 w-5 text-primary" /> Open Source
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We believe in transparency and collaboration. That's why FireAnime is completely open source, allowing
                                anyone to contribute to its development, suggest improvements, or adapt it for their own communities.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Globe className="mr-2 h-5 w-5 text-primary" /> Accessible to All
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                We're committed to making anime accessible to everyone, regardless of location or financial means. Our
                                platform is designed to be inclusive, with features that support multiple languages and accessibility
                                needs.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Separator className="my-12" />

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Community Contributors</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        FireAnime wouldn't exist without these amazing volunteers who contribute their time and skills.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Yuki Tanaka", role: "Founder", avatar: "/placeholder.svg" },
                            { name: "Alex Chen", role: "Lead Developer", avatar: "/placeholder.svg" },
                            { name: "Maria Rodriguez", role: "UI/UX Designer", avatar: "/placeholder.svg" },
                            { name: "David Kim", role: "Content Curator", avatar: "/placeholder.svg" },
                            { name: "Sophia Wang", role: "Community Manager", avatar: "/placeholder.svg" },
                            { name: "James Wilson", role: "Backend Developer", avatar: "/placeholder.svg" },
                            { name: "Aisha Patel", role: "Translator", avatar: "/placeholder.svg" },
                            { name: "Kenji Nakamura", role: "Quality Assurance", avatar: "/placeholder.svg" },
                        ].map((contributor, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Avatar className="h-24 w-24 mb-3">
                                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                    <AvatarFallback>
                                        {contributor.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <h3 className="font-medium">{contributor.name}</h3>
                                <p className="text-sm text-muted-foreground">{contributor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="my-12" />

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-primary/5 border-primary/10">
                            <CardHeader>
                                <CardTitle className="text-center">Community First</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">
                                    Every decision we make is guided by what's best for our community of anime fans, not by profit motives
                                    or external interests.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-primary/10">
                            <CardHeader>
                                <CardTitle className="text-center">Transparency</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">
                                    We operate with complete openness about our processes, decisions, and challenges, keeping our
                                    community informed and involved.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary/5 border-primary/10">
                            <CardHeader>
                                <CardTitle className="text-center">Inclusivity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">
                                    We strive to create a welcoming environment for anime fans of all backgrounds, experiences, and
                                    perspectives.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Separator className="my-12" />

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-8">How You Can Contribute</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Join Our Development Team</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Are you a developer, designer, or content creator? We're always looking for talented individuals to
                                    help improve FireAnime.
                                </p>
                                <div className="flex gap-4">
                                    <Link href={"https://github.com/FireAnime/fireanime"} target="_blank">
                                        <Button variant="outline" className="flex items-center gap-2">
                                            <Github className="h-4 w-4" /> GitHub
                                        </Button>
                                    </Link>
                                    <Link href={"mailto:admin@fireani.me"}>
                                        <Button className="flex items-center gap-2">
                                            <MessageSquare className="h-4 w-4" /> Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Support the Community</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Even if you're not a developer, there are many ways to contribute: report bugs, suggest features, help
                                    with translations, or simply spread the word!
                                </p>
                                <div className="flex gap-4">
                                    {/* <Button variant="outline" className="flex items-center gap-2">
                    <Twitter className="h-4 w-4" /> Twitter
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Button> */}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-6">Our Future Vision</h2>
                    <p className="text-lg max-w-3xl mx-auto">
                        We envision FireAnime becoming the most comprehensive, community-driven anime platform in the world. Not
                        because we want to be the biggest, but because we want to create a space that truly serves the needs and
                        interests of anime fans everywhere, without commercial constraints.
                    </p>
                </div>

                <div className="bg-primary/10 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
                    <p className="mb-6">
                        FireAnime is more than just a platform—it's a community of passionate anime fans. Whether you're a casual
                        viewer or a dedicated otaku, there's a place for you here.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/">Get Involved Today</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

