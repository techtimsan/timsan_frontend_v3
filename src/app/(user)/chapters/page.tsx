"use client";

import { ChaptersTab, Footer, Navbar } from "@/components/ui";
import { ChapterMap } from "@/components/utils";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { institutions, states, zones } from "@/data/profiles";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Institution() {
  const pathname = usePathname();

  return (
    <main>
      <Navbar />
      <ChapterMap />
      <section className="custom__section">
        <h3>All Chapters</h3>

        {/* tabs */}
        <div className="border border-green px-3.5">
          <Tabs
            variant="underlined"
            aria-label="Chapters"
            fullWidth
            // selectedKey={pathname}
          >
            <Tab
              key="zones"
              title="Zonal Chapters"
              className="grid grid-cols-3"
            >
              {zones.map((zone) => (
                <Link href={`/chapters/zonal/`} key={zone.zone} className="px-5 flex flex-col items-start my-2.5" color="foreground">
                  <h3 className="font-semibold">{zone.zone}</h3>
                  <h2 className="text-green font-medium ">TIMSAN</h2>
                </Link>
              ))}
            </Tab>
            <Tab
              key="state"
              title="State Chapters"
              className="grid grid-cols-3"
            >
              {states.map((state) => (
                <Link href={``} key={state.state} className="flex items-start flex-col px-5 my-2.5" color="foreground">
                  <h3 className="font-semibold">{state.state}</h3>
                  <h2 className="font-medium text-green">TIMSAN</h2>
                </Link>
              ))}
            </Tab>
            <Tab
              key="local"
              title="Local Chapters"
              className="grid grid-cols-2 gap-x-4"
            >
              {institutions.map((institution) => (
                <Link color="foreground" className="flex justify-between flex-col items-start px-5 my-2.5 shadow-md py-2.5" href={`/chapters/institution/${institution.institutionName}`} key={institution.institutionName}>
                  <h3 className="font-semibold break-all">{institution.institutionName.split("_").join(" ")}</h3>
                  <h2 className="font-medium text-green">TIMSAN</h2>
                </Link>
              ))}
            </Tab>
          </Tabs>
        </div>
      </section>
      <Footer />
    </main>
  );
}
