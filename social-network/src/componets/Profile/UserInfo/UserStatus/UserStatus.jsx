import React from 'react'
import style from './UserStatus.module.scss'
import editImg from '../../../../assets/images/profile/edit.svg'

export class UserStatus extends React.Component {
  state = {
    editMode: false,
  }
  activateEditMode() {
    this.setState({
      editMode: true,
    })
    // don`t use this.forseUpdate()
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    })
    // don`t use this.forseUpdate()
  }

  render() {
    return (
      <div className={style.userStatus}>
        {!this.state.editMode && (
          <div onClick={this.activateEditMode.bind(this)} className={style.statusText}>
            <p>{this.props.status}</p>
          </div>
        )}
        {this.state.editMode && (
          <div className={style.inputBlock}>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text" />
          </div>
        )}
        <div className={style.editImg} onClick={this.activateEditMode.bind(this)} ><img src={editImg} alt="edit"/></div>
      </div>
    )
  }
}

export default UserStatus
