export type AppPage = {
  slug: string
  label: string
  href: string
  detail: string
}

export type AppSection = {
  id: string
  label: string
  href: string
  icon: string
  iconWidth: number
  iconHeight: number
  pages: AppPage[]
}

export const sections: AppSection[] = [
  {
    id: "overview",
    label: "Overview",
    href: "/overview",
    icon: "/overview/nav-overview.svg",
    iconWidth: 18,
    iconHeight: 18,
    pages: [
      {
        slug: "dashboard",
        label: "Dashboard",
        href: "/overview",
        detail: "The workspace home: the next launch step, strategy files, and the leads already in motion.",
      },
      {
        slug: "radar",
        label: "Live radar",
        href: "/overview/radar",
        detail: "Signals, sends, and approvals as they happen, without leaving the overview.",
      },
    ],
  },
  {
    id: "prospects",
    label: "Prospects",
    href: "/prospects",
    icon: "/overview/nav-prospects.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "input",
        label: "Input",
        href: "/prospects/input",
        detail: "Bring accounts, roles, and the signals that say this week is the moment to speak.",
      },
      {
        slug: "list-builder",
        label: "List builder",
        href: "/prospects/list-builder",
        detail: "Shape the imported names into the list a campaign can actually send.",
      },
      {
        slug: "lead-list",
        label: "Lead list",
        href: "/prospects/lead-list",
        detail: "The real leads in this workspace, with tier, data points, and ledger cost.",
      },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    href: "/campaigns",
    icon: "/overview/nav-campaigns.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "star",
        label: "Star campaigns",
        href: "/campaigns/star",
        detail: "The campaigns marked to launch first.",
      },
      {
        slug: "all",
        label: "All campaigns",
        href: "/campaigns/all",
        detail: "Every campaign in the workspace, from draft to live.",
      },
      {
        slug: "drafts",
        label: "Draft editor",
        href: "/campaigns/drafts",
        detail: "English and Arabic variants sit here until you launch.",
      },
      {
        slug: "lead-magnets",
        label: "Lead magnets",
        href: "/campaigns/lead-magnets",
        detail: "The offer a reply can open, connected to the booking link.",
      },
      {
        slug: "templates",
        label: "Templates",
        href: "/campaigns/templates",
        detail: "Lines that already earned a meeting, ready for the next send.",
      },
    ],
  },
  {
    id: "conversations",
    label: "Conversations",
    href: "/conversations",
    icon: "/overview/nav-conversations.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "replies",
        label: "Replies",
        href: "/conversations/replies",
        detail: "What the market sent back, and the next step on each thread.",
      },
      {
        slug: "inbound",
        label: "Inbound capture",
        href: "/conversations/inbound",
        detail: "Messages that arrived outside the plan, waiting to be filed.",
      },
      {
        slug: "approvals",
        label: "Approvals",
        href: "/conversations/approvals",
        detail: "Hyper-tier notes that do not send until you approve them.",
      },
      {
        slug: "memory",
        label: "Memory review",
        href: "/conversations/memory",
        detail: "What the workspace should remember before the next campaign.",
      },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    href: "/crm",
    icon: "/overview/nav-crm.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "activity",
        label: "CRM activity",
        href: "/crm/activity",
        detail: "Meetings, owners, and the records pushed back to the CRM.",
      },
    ],
  },
  {
    id: "reporting",
    label: "Reporting",
    href: "/reporting",
    icon: "/overview/nav-reporting.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "ledger",
        label: "Ledger",
        href: "/reporting/ledger",
        detail: "Credits spent on Clay and Kimi, tied to the leads you chose.",
      },
      {
        slug: "activity-log",
        label: "Activity log",
        href: "/reporting/activity-log",
        detail: "Sends, approvals, and drafts, in the order they happened.",
      },
      {
        slug: "agent-runs",
        label: "Agent runs",
        href: "/reporting/agent-runs",
        detail: "Each run the workspace took, and what it changed.",
      },
      {
        slug: "system-health",
        label: "System health",
        href: "/reporting/system-health",
        detail: "Connections, inboxes, and the checks that must stay green.",
      },
    ],
  },
  {
    id: "setup",
    label: "Setup",
    href: "/setup",
    icon: "/overview/nav-setup.svg",
    iconWidth: 16,
    iconHeight: 16,
    pages: [
      {
        slug: "integrations",
        label: "Integrations",
        href: "/setup/integrations",
        detail: "Clay, the CRM, Gmail, Slack, and Gong.",
      },
      {
        slug: "settings",
        label: "Settings",
        href: "/setup/settings",
        detail: "Workspace language, numerals, and who can launch.",
      },
      {
        slug: "policies",
        label: "Sending and policies",
        href: "/setup/policies",
        detail: "What is allowed to leave, and what waits for approval.",
      },
    ],
  },
]

export function sectionFromPath(pathname: string) {
  return (
    sections.find(
      (section) => pathname === section.href || pathname.startsWith(`${section.href}/`),
    ) ?? sections[0]
  )
}
