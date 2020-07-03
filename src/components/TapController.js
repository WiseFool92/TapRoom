import React from 'react'
import TapList from './TapList'
import NewTapForm from './NewTapForm'
import TapDetail from './TapDetail'
import EditTapForm from './EditTapForm'

class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableTaps: [],
      selectedTap: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        editing: false,
        formVisibleOnPage: false,
        selectedTap: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingTap = (id) => {
    const newTapList = this.state.availableTaps.filter(tap => tap.id !== id);
    this.setState({
      availableTaps: newTapList,
      selectedTap: null
    });
  }
  
  handleEditingTapInList = (tapToEdit) => {
    const editedTapList = this.state.availableTaps.filter(tap => tap.id !== this.state.selectedTap.id).concat(tapToEdit);
    this.setState({
      availableTaps: editedTapList,
      editing: false,
      selectedTap: null
    });
  }
  
  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.availableTaps.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleAddingNewTap = (newTap) => {
    const newAvailableTaps = this.state.availableTaps.concat(newTap);
    this.setState({availableTaps: newAvailableTaps,
                    formVisibleOnPage: false });
  }

  handleSellingPint = (drinkSold) => {
    if (drinkSold.pints > 0) {
      this.setState(prevState => ({
        availableTaps: prevState.availableTaps.map(
          (tap, index) => (tap.id === drinkSold.id ? Object.assign({}, this.state.availableTaps[index], { pints: parseInt
          (drinkSold.pints - 1) }) : tap)
        )
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTapForm tap = {this.state.selectedTap} 
      onClickEdit = {this.handleEditingTapInList} 
      onEditTap = {this.handleEditingTapInList} />
      buttonText="Return to Taps";
    } else if(this.state.selectedTap !=null){
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} 
      onClickEdit = {this.handleEditClick} 
      onClickDelete = {this.handleDeletingTap} />
      buttonText="Return to Taps";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTapForm onNewTapCreation = {this.handleAddingNewTap} />
      buttonText = "Return to Taps";
    } else {
      currentlyVisibleState = <TapList availableTaps = {this.state.availableTaps} 
      onTapSelection={this.handleChangingSelectedTap}
      onSellPint = {this.handleSellingPint} />
      buttonText = "Add Tap";
    }
    return(
      <>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
      </>
    );
  }
}

export default TapControl;