import React from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { GET_TEAM } from "../graphql/team/teamGraphQL";
import SEO from "../components/seo";
import Item from "../components/utils/Item";

export default function Team() {
  const { t } = useTranslation();
  const { data } = useQuery(GET_TEAM, {
    onError: () => {
      toast.error(`${t("system.load.error")}`);
    },
  });

  return (
    <div>
      <SEO title={t("navigation.team")} />
      <h1 className="pt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl inline max-w-7xl mx-auto h-10 px-4 -pb-3 flex items-center justify-start sm:px-6 lg:px-8 inline pb-8">
        {t("navigation.team")}
      </h1>
      <div className="max-w-2xl mx-auto px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">{t("navigation.team")}</h2>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data?.members?.data?.map((member) => (
            <Item item={member} key={member.id} type="member" />
          ))}
        </div>
      </div>
    </div>
  );
}
