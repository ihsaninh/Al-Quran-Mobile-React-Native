import React, { useState } from 'react';
import { View } from 'react-native';

import { Row } from '../../Components/Row/RowComponent';
import { Lists } from '../../Components/Lists/ListsComponent';
import { Styles } from './SettingsPage.style';
import { Strings } from '../../Utils/Strings';
import { SwitchComponent } from '../../Components/Switch/SwitchComponent';

const SettingsPage = () => {
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleSwitch = val => {
    setSwitchBtn(val);
  };

  const GeneralSettings = [
    {
      title: 'Nada Notifikasi',
      description: 'Default (notice_audition.ogg)',
      onPress: () => null,
    },
    {
      title: 'Ukuran Font Arabic',
      description: '17 (klik untuk menyesuaikan)',
      onPress: () => null,
    },
    {
      title: 'Jenis Huruf Arabic',
      description: 'LPMQ standar KEMENAG',
      onPress: () => null,
    },
    {
      title: 'Bahasa Aplikasi',
      description: 'Bahasa Indonesia',
      onPress: () => null,
    },
  ];

  const OtherSettings = [
    {
      title: 'Bantuan',
      description: 'Butuh pertanyaan? Butuh bantuan?',
      onPress: () => null,
    },
    {
      title: 'Versi Aplikasi',
      description: '1.0-dev',
      onPress: () => null,
    },
  ];

  return (
    <View style={Styles.container}>
      <Row title={Strings.generalSettings}>
        {GeneralSettings.map((item, i) => (
          <Lists
            key={i}
            title={item.title}
            description={item.description}
            onPress={item.onPress}
          />
        ))}
        <SwitchComponent
          title="Mode Gelap"
          description={switchBtn ? 'Mode gelap hidup' : 'Mode gelap mati'}
          value={switchBtn}
          onValueChange={toggleSwitch}
        />
      </Row>
      <Row title={Strings.otherSetting}>
        {OtherSettings.map((item, i) => (
          <Lists
            key={i}
            title={item.title}
            description={item.description}
            onPress={item.onPress}
          />
        ))}
      </Row>
    </View>
  );
};

export default SettingsPage;
