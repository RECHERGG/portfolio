"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, Eye, Calendar, ExternalLink } from "lucide-react"

interface GitHubRepo {
  name: string
  full_name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  updated_at: string
  open_issues_count: number
}

interface GitHubProjectCardProps {
  owner: string
  repo: string
}

export default function GitHubProjectCard({ owner, repo }: GitHubProjectCardProps) {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        if (!response.ok) {
          throw new Error("Failed to fetch repository data")
        }
        const data = await response.json()
        setRepoData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchRepoData()
  }, [owner, repo])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k"
    }
    return num.toString()
  }

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-4 border"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-neutral-300 dark:bg-neutral-700 rounded w-1/2 mb-4"></div>
          <div className="flex gap-2">
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-16"></div>
            <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-16"></div>
          </div>
        </div>
      </motion.div>
    )
  }

  if (error || !repoData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-4 border border-red-200 dark:border-red-800"
      >
        <p className="text-red-600 dark:text-red-400 text-sm">Failed to load repository data</p>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="dark:bg-neutral-900 bg-neutral-100 border hover:border-gray-500 transition-colors group cursor-pointer p-0">
        <CardContent className="p-3">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {repoData.name}
                </h3>
                <Badge variant="outline" className="text-xs">
                  Collaborator
                </Badge>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-2">{repoData.description}</p>
            </div>
            <a
              href={repoData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-1 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-neutral-500" />
            </a>
          </div>

          <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span>{formatNumber(repoData.stargazers_count)}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-4 h-4" />
                <span>{formatNumber(repoData.forks_count)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{formatNumber(repoData.watchers_count)}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(repoData.updated_at)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
