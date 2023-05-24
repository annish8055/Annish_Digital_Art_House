 import { MainLayout, SectionContainer} from './components';
import {
  IntroSection, ContactSection, HomeSection, TestimonialSection, SkillsSection, OrderSection
} from './sections';
import { SectionIdEnum } from './types';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <HomeSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <SkillsSection />,
  },
  {
    sectionId: SectionIdEnum.projects,
    component: <TestimonialSection />,
  },
  {
    sectionId: SectionIdEnum.order,
    component: <OrderSection />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <ContactSection />,
  },
];


function App() {
  return (
    <>
<MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
    </>
  )
}

export default App
