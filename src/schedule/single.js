import React from 'react-native';
import Accordion from 'react-native-accordion';
import { Icon } from 'react-native-icons';
import { Text, colors } from '../utils';

const {
  View,
  StyleSheet,
  Image
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  time: {
    color: colors.green
  },
  speaker: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 12,
    width: 105
  },
  talk: {
    fontSize: 13
  },
  sized: {
    height: 70
  },
  leftColumn: {
    paddingLeft: 10,
    paddingTop: 15,
    width: 105,
    flexDirection: 'column'
  },
  borderTopBig: {
    borderTopWidth: 4
  },
  borderTop: {
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: colors.grey
  },
  rightColumn: {
    paddingLeft: 10,
    paddingTop: 15,
    flex: 1,
    flexDirection: 'column'
  },
  avatar: {
    marginLeft: 20,
    width: 45,
    height: 45,
    borderRadius: 23
  },
  talkExcerpt: {
    marginBottom: 20,
    marginRight: 10,
    fontSize: 13
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  chevronContainer: {
    width: 25
  },
  chevron: {
    marginRight: 10,
    marginLeft: 5,
    height: 20,
    width: 20
  },
  rethinking: {
    borderTopWidth: 4,
    borderTopColor: colors.purple
  },
  dataflow: {
    borderTopWidth: 4,
    borderTopColor: colors.blue
  },
  react: {
    borderTopWidth: 4,
    borderTopColor: colors.green
  },
  general: {
    borderTopWidth: 4,
    borderTopColor: colors.yellow
  }
});

export default class Info extends React.Component {
  renderHeader() {
    const borderColor = this.props.type ? styles[this.props.type] : {};
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.leftColumn, styles.sized, styles.borderTop, styles.borderTopBig]}>
          <Text style={styles.time}>8:00 - 9:00</Text>
          <Text style={styles.speaker}>R. Tirumalareddy</Text>
        </View>
        <View style={[styles.rightColumn, styles.sized, styles.borderTop, borderColor]}>
          <Text style={styles.talk}>FUNCTIONAL PROGRAMMING IN JAVASCRIPT. WHAT, WHY, AND HOW.</Text>
        </View>
        <View style={[styles.borderTop, styles.sized, styles.center, styles.chevronContainer, borderColor]}>
          <Icon name="ion|ios-arrow-down" size={20} color={colors.grey} style={styles.chevron}/>
        </View>
      </View>
    );
  }

  renderContent() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Image style={styles.avatar} source={{uri: 'https://reactive2015.com/assets/img/team/daniel_steigerwald.jpg'}} />
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.talkExcerpt}>As programs get bigger, they also become more complex and harder to understand. We all think ourselves pretty clever, of course, but we are mere human beings, and even a moderate amount of chaos tends to baffle us. And then it all goes downhill. Working on something you do not really understand is a bit like cutting random wires on those time-activated bombs they always have in movies. If you are lucky, you might get the right one ― especially if you are the hero of the movie and strike a suitably dramatic pose ― but there is always the possibility of blowing everything up.</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        underlayColor="#f0f0f0"
        header={this.renderHeader()}
        content={this.renderContent()}
        easing="easeOutCubic"
      />
    );
  }
}
