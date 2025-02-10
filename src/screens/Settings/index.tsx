import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import GradientBackground from '../../components/GradientBg';
import SettingsPanel from '../../components/SettingsPanels';
import BottomBar from '../../components/BottomBar';

import OnlineSupportSvg from '../../assets/images/OnlineSupport.svg';
import AgreementSvg from '../../assets/images/Agreement.svg';
import PrivacySvg from '../../assets/images/Privacy.svg';
import InfoSvg from '../../assets/images/Information.svg';

import { deleteAllNotes } from '../../shared/utils/asyncStorageUtils';

const Settings = () => {
  const deleteNotes = async() => {
    await deleteAllNotes();

    Alert.alert('All notes have been cleared');
  };

  return (
    <GradientBackground>
        <>
            <View style={styles.mainContainer}>
                <SettingsPanel
                    icons={<OnlineSupportSvg width={25} height={25} />}
                    panelTitle="Online Customer"
                    onPress={() => Alert.alert('Work In Progress!')}
                />

                <SettingsPanel
                    icons={<AgreementSvg width={25} height={25} />}
                    panelTitle="User Agreement"
                    onPress={() => Alert.alert('Work In Progress!')}
                />

                <SettingsPanel
                    icons={<PrivacySvg width={25} height={25} />}
                    panelTitle="Privacy Policy"
                    onPress={() => Alert.alert('Work In Progress!')}
                />

                <SettingsPanel
                    icons={<InfoSvg width={25} height={25} />}
                    panelTitle="About Us"
                    onPress={() => Alert.alert('Work In Progress!')}
                />
            </View>

            <BottomBar
                label="Delete All Notes"
                onPress={deleteNotes}
            />
        </>
    </GradientBackground>
  );
};

export default Settings;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 30,
    },
});
