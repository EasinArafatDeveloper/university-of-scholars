import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ius.edu.bd";

  const routes = [
    "",
    "/about",
    "/about/vision-mission",
    "/about/accreditations",
    "/about/facilities",
    "/about/documents",
    "/about/career",
    "/about/board-of-trustees",
    "/about/chancellor",
    "/about/vc",
    "/about/pro-vc",
    "/about/treasurer",
    "/about/committees",
    "/admission",
    "/admission/requirements",
    "/admission/fees",
    "/admission/procedure",
    "/admission/contact",
    "/admission/scholarships",
    "/programs",
    "/administration",
    "/administration/registrar",
    "/administration/controller-of-examination",
    "/administration/cco",
    "/administration/proctor",
    "/administration/board",
    "/administration/external-affairs",
    "/activities",
    "/activities/recorded-class",
    "/activities/clubs",
    "/activities/events",
    "/activities/alumni",
    "/activities/collaboration",
    "/activities/short-courses",
    "/activities/student-support",
    "/publicity",
    "/faculty",
    "/research",
    "/labs",
    "/notices",
  ];

  return routes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (
      route === "/admission" ||
      route === "/programs" ||
      route === "/notices"
    ) {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route.startsWith("/about/")) {
      priority = 0.6;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
