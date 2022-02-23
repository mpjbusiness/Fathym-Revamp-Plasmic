// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pRuurKx4qvQgrn4j4Y2QQH
// Component: H_C24Ypq5Q4
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 8SI-4BeePs4/component
import Section from "../../Section"; // plasmic-import: opDBHhnXpCbj/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: sfheXgfgSKL/component
import Testimonial from "../../Testimonial"; // plasmic-import: 3bjoCbyUtJy3/component
import HomeCta from "../../HomeCta"; // plasmic-import: dVsW3BamtUD/component
import Footer from "../../Footer"; // plasmic-import: LSa4QycSwwp/component

import { useScreenVariants as useScreenVariantsnO3CKcOkrIuu } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nO3CKcOKRIuu/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: pRuurKx4qvQgrn4j4Y2QQH/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: H_C24Ypq5Q4/css

import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: DwWC_vMoX5NU/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: C5JNr10S0sWA/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: 0J5nC0vWO6Zl/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  solutions?: p.Flex<typeof Section>;
  columns?: p.Flex<"div">;
  validation?: p.Flex<typeof Section>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnO3CKcOkrIuu()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sSkcN)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__euvUp)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___0234C)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__x9RhD
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobile")
                      ? "Make your website"
                      : "Let Fathym fix the imbalance of software development!!!!"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yz7Vr
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                    : "Over the years, there has been a steady progression of removing the complex tasks that only a handful of senior engineers can tackle. Fathym plays a crucial role in this progression. We help diverse groups of people rapidly build and deploy cloud-native applications."}
                </div>
              </p.Stack>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aN7D
                )}
              >
                {
                  "Fathym's suite of tools allows you to focus on delivering quality open-source solutions to your community without all of the heavy lifting!"
                }
              </div>
            }
            title={"Explore the solutions"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__n3HXs)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__gDiEu)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___47OCi
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>

                  {true ? (
                    <FeatureCard
                      className={classNames(
                        "__wab_instance",
                        sty.featureCard__fZHw
                      )}
                      description={
                        <React.Fragment>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___2NHVf
                            )}
                          >
                            {
                              "LowCodeUnit operates as a virtual development team to augment your team’s skills and assist to automatically build, deploy, serve, and manage your web applications."
                            }
                          </div>

                          {true ? (
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                projectcss.__wab_text,
                                sty.link___9GAam
                              )}
                              component={Link}
                              href={"https://www.lowcodeunit.com" as const}
                              platform={"nextjs"}
                              target={"_blank" as const}
                            >
                              {"Build more... "}
                            </p.PlasmicLink>
                          ) : null}
                        </React.Fragment>
                      }
                      iconBack={
                        true ? (
                          <LightningIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__tAlw
                            )}
                            role={"img"}
                          />
                        ) : null
                      }
                      iconFront={
                        <svg
                          className={classNames(projectcss.all, sty.svg__ik0Uw)}
                          role={"img"}
                        />
                      }
                      long={true}
                      title={"LowCodeUnit"}
                    />
                  ) : null}

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___07Rir
                    )}
                    description={
                      <React.Fragment>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___4ZNmN
                          )}
                        >
                          {
                            "IoT Ensemble allows you to enroll devices and get IoT data flowing to downstream alerts, visualizations, and machine learning applications within minutes."
                          }
                        </div>

                        {true ? (
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__fvUf
                            )}
                            component={Link}
                            href={"https://www.iot-ensemble.com" as const}
                            platform={"nextjs"}
                            target={"_blank" as const}
                          >
                            {"Connect More... "}
                          </p.PlasmicLink>
                        ) : null}
                      </React.Fragment>
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__bwjoh)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"IoT Ensemble"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__npTN
                    )}
                    description={
                      <React.Fragment>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cYyJj
                          )}
                        >
                          {
                            "Habistack provides ground level, route-based weather forecast APIs for anywhere in the United States."
                          }
                        </div>

                        {true ? (
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link___2G7X7
                            )}
                            component={Link}
                            href={"https://www.habistack.com" as const}
                            platform={"nextjs"}
                            target={"_blank" as const}
                          >
                            {" Learn More... "}
                          </p.PlasmicLink>
                        ) : null}
                      </React.Fragment>
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__sCO8)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Habistack"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard___1YZlJ
                    )}
                    description={
                      <React.Fragment>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__arbQ1
                          )}
                        >
                          {
                            "Drive safely with knowledge of road conditions and weather along your route. Use Proadject to help you determine which routes to take on trips."
                          }
                        </div>

                        {true ? (
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link__nmFbh
                            )}
                            component={Link}
                            href={"https://www.proadject.com" as const}
                            platform={"nextjs"}
                            target={"_blank" as const}
                          >
                            {"Explore More... "}
                          </p.PlasmicLink>
                        ) : null}
                      </React.Fragment>
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg__cKxRh)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"pROADject"}
                  />
                </p.Stack>
              </div>

              <div className={classNames(projectcss.all, sty.column___4Ov5T)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fynzc)}
                  displayHeight={"750px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/saasLightbulb1000Pixelwidepng.png",
                    fullWidth: 1000,
                    fullHeight: 666,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Fathym partners with software and hardware companies from all over."
            }
            title={"Trusted by great partners"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cqJ2M)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___7ZgFp)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zz4Ty)}
                  displayHeight={"75px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/goldPartnerLogopng.png",
                    fullWidth: 275,
                    fullHeight: 183,
                    aspectRatio: undefined
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__ciIe4)}
                  displayHeight={"79px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/clovityLogo1024X791Png.png",
                    fullWidth: 1024,
                    fullHeight: 791,
                    aspectRatio: undefined
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__mNp5H)}
                  displayHeight={"79px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/advantechLogo2JpGjpg.jpeg",
                    fullWidth: 466,
                    fullHeight: 256,
                    aspectRatio: undefined
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__tRye)}
                  displayHeight={"77px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/valorem21024X978Png.png",
                    fullWidth: 1024,
                    fullHeight: 978,
                    aspectRatio: undefined
                  }}
                />

                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__zUvC)}
                  displayHeight={"57px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/azureLogopng.png",
                    fullWidth: 495,
                    fullHeight: 210,
                    aspectRatio: undefined
                  }}
                />
              </p.Stack>

              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  solutions: typeof Section;
  columns: "div";
  validation: typeof Section;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
