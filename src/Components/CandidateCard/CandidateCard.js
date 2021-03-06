import React, { Component } from 'react'
import "./CandidateCard.css";

class CandidateCard extends Component {

    handleYesVoteClick = (event) => {
        this.updateVote('Yes');
        console.log('you clicked yes on a candidate')
    }

    handleNoVoteClick = (event) => {
        this.updateVote('No');
        console.log('you clicked no on a candidate')
    }

    updateVote = (choice) => {
        let user = this.props.user;
        let candidate = this.findUserCandidate();
        if (candidate) {
            candidate.choice = choice
        } else {
            candidate = {
                ...this.props.candidate,
                choice: choice
            };
            user.candidates.push(candidate);
        }
        this.props.updateUser(user);
        console.log('candidate choice ' + candidate.choice)
    }

    findUserCandidate = () => {
        return this.props.user.candidates.find(candidate => candidate.id === this.props.candidate.id);
    }

    renderVotingContent = () => {
        let content = (
            <div className="row">
                <div className="col">
                    <p> Log in to save your vote</p>
                </div>
            </div>
        );



        if (this.props.user) {
            let choice = null;
            const candidate = this.findUserCandidate();
            console.log('Here is the candidate' + candidate)
            if (candidate) {
                choice = 'You Voted ' + candidate.choice;
            }

            content = (
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>{choice}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <span><button onClick={this.handleYesVoteClick} type="button" className="btn btn-yes">Vote Yes</button></span>&nbsp;&nbsp;<span><button onClick={this.handleNoVoteClick} type="button" className="btn btn-no">Vote No</button></span>
                        </div>
                    </div>
                </div>
            );
        }
        return content;
    }

    renderWebsite = () => {
        if (this.props.candidate.website) {
            return <span><a href={this.props.candidate.website} target="_blank">website</a></span>
        }
    }

    renderTwitterHandle = () => {
        if (this.props.candidate.twitter) {
            return <span><a target="_blank"><i className="fab fa-twitter fa-sm"></i>@</a>{this.props.candidate.twitter}</span>
        }
    }

    render() {
        return (
            <div className="mainBallotCard">
                <div className="col-lg-4 col-sm-12">
                    <div className="card candidateCard">
                        <div className="card-body">
                            <h3 className="card-title">{this.props.candidate.name}</h3>
                            <h4 className="cadidateOffice">{this.props.candidate.office}</h4>
                            <h5 className="cadidateParty">{this.props.candidate.party}</h5>
                            <p> {this.renderWebsite()} </p>
                            <p>{this.renderTwitterHandle()}</p>
                            {this.renderVotingContent()}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default CandidateCard;
