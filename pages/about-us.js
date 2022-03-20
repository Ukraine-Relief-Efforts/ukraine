import Layout from "../components/layout";
import OneFaq from "../components/SubPage/FAQ/OneFaq";
import Hero from "../components/SubPage/Hero/hero";
import Button from "../components/Button/button";

export default function AboutUs() {
    return (
        <Layout>
            <div className="w-full md:w-3/4 lg:w-2/3 pb-8">
                <Hero
                    title="About Us"
                    description="We are a group of volunteers from all walks of life,
                    united over a mission to save Ukrainian lives and
                    support the wellbeing of people affected by the war."
                />
                <div className="bg-gray-100 absolute right-0 py-8 px-6 sm:px-16 sm:mt-8 lg:pl-40 lg:pr-96">
                    <div className="mt-8">
                        <h1 className="text-2xl lg:text-4xl mb-2">
                            Problems We Are Solving
                        </h1>
                        <OneFaq title="Credibility">
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        People often don’t understand what their
                                        donation will be spent on. This
                                        uncertainty is a commonly cited reason
                                        for not donating.
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Larger organizations in Ukraine receive
                                        substantial international donations,
                                        while smaller volunteer groups often
                                        cannot secure the funds for necessary
                                        supplies because of their small reach
                                        and inability to prove their credibility
                                        to international donors.
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                        <OneFaq title="Language Barrier">
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Organizations lack English descriptions
                                        on their donation pages, especially
                                        regarding how they will spend the money
                                        and evidence of past work, which makes
                                        their information less legitimate in the
                                        eyes of English speakers .
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-row items-center mb-4 gap-3">
                                <span className="shrink-0 w-6">👉 </span>
                                <span>
                                    <p className=" leading-tight">
                                        Foreigners with large contributions
                                        often want to get in touch with the
                                        organizations. However, finding direct
                                        contact is difficult, and some
                                        organizations don’t speak English.
                                    </p>
                                </span>
                            </div>
                        </OneFaq>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-2xl lg:text-4xl my-4">
                            Get in touch
                        </h1>
                        <p>
                            Our volunteer group is now around 30 people from
                            Ukraine, the US, Canada, Netherlands, and beyond,
                            contributing to the project in different capacities
                            including design, development, legal advice,
                            marketing, cybersecurity, and more. Anyone with
                            skills and capacity to help is welcome to join our
                            efforts!
                        </p>
                        <br></br>
                        <p>
                            Use this form to get in touch about volunteering
                            opportunities with us, partnerships, and media
                            coverage.
                        </p>
                        <br></br>
                        <div className="w-full sm:w-64">
                            <Button
                                value="Contact Form"
                                href="https://forms.gle/fENMLtLzqAxE3fwm6"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
