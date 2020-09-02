import React from 'react';
import { ScrollView,SectionList,Text } from 'react-native';
import Row from './Row'



const SectionListquates = props => {
    const QuatesByLetter = props.quates.reduce((obj, quate) => {
      const firstLetter = quate.name[0].toUpperCase();
      return {
        ...obj,
        [firstLetter]: [...(obj[firstLetter] || []), quate],
      };
    }, {});
  
    const sections = Object.keys(QuatesByLetter)
      .sort()
      .map(letter => ({
        data: QuatesByLetter[letter],
        title: letter,
      }));
    const renderSectionHeader = ({ section }) => <Text style={props.Styles.text}>{section.title}</Text>
    return (
      <SectionList
        keyExtractor={item => item.id}
        sections={sections}
        renderItem={({ item }) => <Row {...item} onSelectedquate={props.onSelectedquate} Styles={props.Styles} /> }
        renderSectionHeader={renderSectionHeader}
      />
    );
  };
//   onSelectContact={props.onSelectContact}
export default SectionListquates;