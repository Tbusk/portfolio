import OpenSourceContribution from "./OpenSourceContribution.tsx";

export default function OpenSourceContributions() {
    return (
        <>
            <div className="flex flex-col pb-4">
                <div>
                    <div className="text-3xl md:text-6xl px-2 md:px-0 py-1 md:py-4">
                        Open Source Contributions
                    </div>
                </div>
                <div className="flex flex-col gap-8 pt-2">
                    <OpenSourceContribution
                        name="vala-Lang / vala-docs"
                        link="https://github.com/vala-lang/vala-docs"
                        content={[
                            `Ported static site generator from Sphinx to VitePress`,
                            `Ported hundreds of documentation from reStructuredText to Markdown`,
                            `Added documentation for numeric literal suffixes`,
                            `Added documentation on data type sizes and ranges`,
                            `Ported archived gnome vala syntax guide from wiki`,
                            `Various miscellaneous fixes and improvements`
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / monitor"
                        link="https://github.com/elementary/monitor"
                        content={[
                            `Updated statusbar and indicator gpu usage to use most-active GPU on multi-GPU systems`,
                            `Added swap usage and total info to memory graph`,
                            `Updated metainfo file naming convention`,
                            `Tested per-process GPU usage and added support for amd-systems through libgtop and fdinfo`,
                            `Patched issue with csv parsing of cpu information`,
                            `Created CI/CD test runner action`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / settings-power"
                        link="https://github.com/elementary/settings-power"
                        content={[
                            `Patched switch sizing issue being enlarged by dependency update`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / appcenter-dashboard"
                        link="https://github.com/elementary/appcenter-dashboard"
                        content={[
                            `Patched issue where content was cut-off on mobile layouts in the elixer web app`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / screenshot"
                        link="https://github.com/elementary/screenshot"
                        content={[
                            `Patched segfault issue where app crashed when screenshot height is 1/4x or more greater than the width`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="greenmail-mail-test / greenmail"
                        link="https://github.com/greenmail-mail-test/greenmail"
                        content={[
                            `
                            Patched issue where duplicate mime messages were showing up when cc and bcc share the same 
                            address as the destination
                            `,
                        ]}
                    />
                </div>
            </div>
        </>
    );
}