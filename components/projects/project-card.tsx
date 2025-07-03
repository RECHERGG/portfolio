import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectProps } from "@/lib/projects";

export default function ProjectCard(props: ProjectProps) {
    return (
        <Card className="py-0 pb-4">
            <AspectRatio ratio={16 / 6} className="bg-muted rounded-lg">
                <Image
                    src={props.thumbnail}
                    alt={`Thumbnail of ${props.title}`}
                    fill
                    className="h-full w-full rounded-ss-xl rounded-se-xl object-cover"
                />
            </AspectRatio>

            <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    {props.title}
                    {props.development && (
                        <Badge variant="default" className="w-fit animate-pulse">
                            In Progress
                        </Badge>
                    )}
                </CardTitle>

                <CardDescription>{props.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {props.technologies.map((technologie) => (
                            <Badge variant="secondary" key={technologie.name}>{technologie.icon} {technologie.name}</Badge>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2 pt-4">
                <Link href={props.github} className="w-full" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full hover:cursor-pointer"><Github /> GitHub</Button>
                </Link>
                {props.demo === undefined ? (
                    <></>
                ) : (
                    <Link href={props.demo} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full hover:cursor-pointer"><SquareArrowOutUpRight /> Live Demo</Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}