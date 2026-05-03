import { CmsData } from "./cms-data"
import { programmingProjects, consultingProjects } from "./projects-data"
import fs from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "cms.json")

function ensureDataDir() {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

const defaultData: CmsData = {
  programmingProjects: programmingProjects as any,
  consultingProjects: consultingProjects as any,
  sideMissions: [
    {
      title: "Social Media Marketing Agency",
      tagline: "Helping brands grow their digital presence",
      description: "Founded and operate a boutique social media marketing agency focused on authentic brand storytelling and data-driven growth strategies for small to medium businesses.",
      highlights: [
        { label: "Clients Served", value: "25+" },
        { label: "Avg. Growth Rate", value: "340%" },
      ],
      services: ["Content Strategy", "Brand Identity", "Community Management", "Paid Advertising", "Analytics & Reporting", "Influencer Partnerships"],
      link: "#",
      color: "from-pink-500/20 to-orange-500/20",
      accentColor: "text-pink-500",
    },
  ],
}

export function readCmsData(): CmsData {
  try {
    ensureDataDir()
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) as CmsData
    }
  } catch {}
  return defaultData
}

export function writeCmsData(data: CmsData): void {
  ensureDataDir()
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8")
}
