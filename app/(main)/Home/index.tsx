import { ScrollView, View } from 'react-native';

import {
  ComputersImg,
  HardwareImg,
  NotebookImg,
  PeripheralsImg,
} from '@/assets';
import Carousel from '@/components/Carousel';
import HomeHeader from '@/components/HomeHeader';
import HomeSection from '@/components/HomeSection';
import TabBar from '@/components/TabBar';

const Home = () => {
  return (
    <View className="flex-1">
      <ScrollView className="flex-1" contentContainerClassName="pb-28">
        <HomeHeader title="Home" />

        <Carousel />

        <HomeSection
          data={[
            NotebookImg,
            NotebookImg,
            NotebookImg,
            NotebookImg,
            NotebookImg,
          ]}
        />

        <HomeSection
          title="Computadores"
          data={[
            ComputersImg,
            ComputersImg,
            ComputersImg,
            ComputersImg,
            ComputersImg,
          ]}
        />

        <HomeSection
          title="Hardware"
          data={[
            HardwareImg,
            HardwareImg,
            HardwareImg,
            HardwareImg,
            HardwareImg,
          ]}
        />

        <HomeSection
          title="Periféricos"
          data={[
            PeripheralsImg,
            PeripheralsImg,
            PeripheralsImg,
            PeripheralsImg,
            PeripheralsImg,
          ]}
        />
      </ScrollView>
      <TabBar />
    </View>
  );
};

export default Home;
