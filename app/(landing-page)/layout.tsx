import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "https://genai.patooworld.com/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
          { title: "Github", href: "https://github.com/patooworld", external: true },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Patooworld Auth"
        builtByLink="https://www.patooworld.com/"
        githubLink="https://github.com/officialpatoo/stack"
        twitterLink="https://twitter.com/patooworld"
        linkedinLink="linkedin.com/company/patooworld"
      />
    </div>
  );
}
