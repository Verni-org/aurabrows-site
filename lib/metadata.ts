type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const siteUrl = "https://aurabrowsbysaska.rs";
const defaultImage = `${siteUrl}/images/site/hero-edukacija.jpeg`;

export function buildPageMetadata({
  title,
  description,
  path = "",
  image = defaultImage,
}: PageMetadataInput) {
  const url = `${siteUrl}${path}`;

  return {
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AuraBrows by Saška",
      locale: "sr_RS",
      type: "website" as const,
      images: [
        {
          url: image,
          width: 1080,
          height: 1920,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
