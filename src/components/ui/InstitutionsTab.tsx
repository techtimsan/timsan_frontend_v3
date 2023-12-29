"use client";

import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { institutions, states, zones } from "@/data/profiles";
import { Link } from "@nextui-org/react";

export const InstitutionsTab = () => {


  return (
    <div className="border border-green">
      <Tabs variant="underlined" aria-label="Chapters" fullWidth>
        <Tab key="executives" title="Executives" className="grid grid-cols-3">
            {zones.map((zone) => (
                <Link key={zone.zone}>
                    <h3>{zone.zone}</h3>
                    <h2>TIMSAN</h2>
                </Link>
            ))}
        </Tab>
        <Tab key="activities" title="Activities" className="grid grid-cols-3">
            {states.map((state) => (
                <Link key={state.state}>
                    <h3>{state.state}</h3>
                    <h2>TIMSAN</h2>
                </Link>
            ))}
        </Tab>
        <Tab key="events" title="Events" className="grid grid-cols-2">
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

export default InstitutionsTab;
