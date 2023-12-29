"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { institutions, states, zones } from "@/data/profiles";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export const ChaptersTab = () => {
    const pathname = usePathname()

  return (
    <div className="border border-green">
      <Tabs variant="underlined" aria-label="Chapters" fullWidth selectedKey={pathname}>
        <Tab key="zonal" title="Zonal Chapters" className="grid grid-cols-3" href="/chapters/zonal">
            {zones.map((zone) => (
                <Link key={zone.zone}>
                    <h3>{zone.zone}</h3>
                    <h2>TIMSAN</h2>
                </Link>
            ))}
        </Tab>
        <Tab key="state" title="State Chapters" className="grid grid-cols-3" href="/state">
            {states.map((state) => (
                <Link key={state.state}>
                    <h3>{state.state}</h3>
                    <h2>TIMSAN</h2>
                </Link>
            ))}
        </Tab>
        <Tab key="local" title="Local Chapters" className="grid grid-cols-2" href="/chapters/local">
          {institutions.map((institution) => (
            <Link href={`/chapters/institution/local/${institution.institutionName}`} key={institution.institutionName}>
              <h3>{institution.institutionName}</h3>
              <h2>TIMSAN</h2>
            </Link>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default ChaptersTab;
