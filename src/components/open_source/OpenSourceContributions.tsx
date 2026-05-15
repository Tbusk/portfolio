import OpenSourceContribution, { type OpenSourceContributionProps } from "./OpenSourceContribution.tsx";
import HrItem from "../common/HrItem.tsx";
import openSourceJson from '../../data/open-source.json';

export default function OpenSourceContributions() {

    const {contributions} = openSourceJson;

    return (
        <>
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
        </>
    );
}