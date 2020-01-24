import React from 'react';
import {addDialogAC as dialogTextAreaSubmit } from "../../Redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../Redux/selectors/dialogsSelectors";
const DialogsContainer = (props) => {
    return <Dialogs {...props} />
};
const mapStateToProps = ({dialogsPage}) => ({dialogsPage: getDialogsPage(dialogsPage)});
export default compose(
    connect(mapStateToProps, {
        dialogTextAreaSubmit,
    }),
    withAuthRedirect
)(DialogsContainer);