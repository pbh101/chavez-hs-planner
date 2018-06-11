import * as React from "react";

import {
  Program,
  ProgramOutcome,
  ProgramDictionary,
  ProgramGroup,
  ProgramOutcomeDictionary
} from "shared/types";

import SearchBar from "shared/components/ui/search-bar";


import SuccessChanceKey from "./success-chance-key";
import HSGroup from "./hs-group";

interface HSProgramListProps {
  programs: ProgramDictionary
  programGroups: ProgramGroup[]
  outcomes: ProgramOutcomeDictionary
  onSelectedProgramChange: (program: Program, outcome: ProgramOutcome | undefined) => any
}

interface HSProgramListState {
  searchTerm: string;
}

import {INPUT_DEBOUNCE_TIME} from "shared/constants";

class HSProgramList extends React.PureComponent<HSProgramListProps, HSProgramListState> {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }


  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "hidden"
        }}
      >
        <SuccessChanceKey />
        <SearchBar 
          value={this.state.searchTerm} 
          onChange={value => this.setState({searchTerm: value})}
          debounceTime={INPUT_DEBOUNCE_TIME}
        />
        <div 
          style={{
            width: "100%", 
            height: "100%", 
            overflowY: "auto", 
            overflowX:"hidden", 
            position: "relative"
          }}
        >
          {
          /* 
           * Iterate through the hsProgramGroups passed in through props.
           * For each program group, render a HSGroup component containing the programs
           * with the ids specified in the program group.
           * */
          this.props.programGroups.map( group => {
            // get this group's programs by looking up programIDs.
            const programs: Program[] = group.programIDs.map( programID => this.props.programs[programID] );
            // filter the programs by the current search term.
            const filteredPrograms = this.filterBySearchTerm(programs, this.state.searchTerm);

            if (filteredPrograms.length > 0) {
              return (
                <HSGroup
                  key={group.id}
                  title={group.name}
                  programs={filteredPrograms}
                  outcomes={this.props.outcomes}
                  onSelectedProgramChange={this.props.onSelectedProgramChange}
                />
              )
            }
          })
          }
        </div>
      </div>
    );
  }

  private filterBySearchTerm = (programs: Program[], searchTerm: string): Program[] => {
    // if search term is empty, return early.
    if (searchTerm.trim() === "") {
      return programs;
    }

    const term = searchTerm.trim().toLowerCase();
    const hasTerm = (text: string) => {
      return text.toLowerCase().indexOf(term) != -1;
    };

    return programs.filter( program => {
      return hasTerm(program.programName);
    });
  }

};

export default HSProgramList;
