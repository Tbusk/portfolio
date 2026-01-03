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
                        name="vala-lang / vala-docs"
                        link="https://github.com/vala-lang/vala-docs"
                        description={
                        `Documentation website for the Vala programming language live at docs.vala.dev`
                        }
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
                        description={
                            `Vala and GTK-based system monitor application made for the linux distro elementary OS`
                        }
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
                        description={
                            `Vala and GTK-based system power settings application made for the linux distro elementary OS`
                        }
                        content={[
                            `Patched switch sizing issue being enlarged by dependency update`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / appcenter-dashboard"
                        link="https://github.com/elementary/appcenter-dashboard"
                        description={
                            `Elixer-based web app for managing appcenter apps made for the linux distro elementary OS`
                        }
                        content={[
                            `Patched issue where content was cut-off on mobile layouts`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="elementary / screenshot"
                        link="https://github.com/elementary/screenshot"
                        description={
                            `Vala and GTK-based screenshot application made for the linux distro elementary OS`
                        }
                        content={[
                            `Patched segfault issue where app crashed when screenshot height is 1/4x or more greater than the width`,
                        ]}
                    />

                    <OpenSourceContribution
                        name="greenmail-mail-test / greenmail"
                        link="https://github.com/greenmail-mail-test/greenmail"
                        description={
                            `Java-based email testing library to send, receive, and verify emails for testing`
                        }
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