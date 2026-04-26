import OpenSourceContribution, { type OpenSourceContributionProps } from "./OpenSourceContribution.tsx";
import SectionTitle from "../common/SectionTitle.tsx";
import HrItem from "../common/HrItem.tsx";
import openSourceJson from '../../data/open-source.json';
import myInfoJson from "../../data/my-info.json";

export default function OpenSourceContributions() {

    const myInfo = myInfoJson;
    document.title = `${myInfo.name} | Open Source Contributions`;
    const {contributions} = openSourceJson;

    return (
        <>
            <div className="flex flex-col">

                <SectionTitle title="Open Source" id="opensource"/>

                <div className="flex flex-col gap-8 md:pt-2 md:px-2 px-6">

                    {contributions && contributions.length > 0 && contributions.map((openSourceItem: OpenSourceContributionProps, index: number) =>
                        <div key={index}>
                            <OpenSourceContribution
                                name={openSourceItem.name}
                                link={openSourceItem.link}
                                description={openSourceItem.description}
                                content={openSourceItem.content}
                            />

                            {index < contributions.length - 1 && <HrItem/>}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}