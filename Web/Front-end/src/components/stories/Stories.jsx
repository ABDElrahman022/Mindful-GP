import React, { Component } from 'react';
import forum from '../../images/forum.jpg';
import './Stories.css';

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      newStoryContent: '',
      replies: {}, // لكل ردوده
    };
  }

  componentDidMount() {
    const savedStories = JSON.parse(localStorage.getItem('userStories')) || [];
    const savedReplies = JSON.parse(localStorage.getItem('storyReplies')) || {};
    this.setState({
      stories: savedStories.length
        ? savedStories
        : [
            { id: 1, title: 'Story 1', content: 'This is the first story.' },
            { id: 2, title: 'Story 2', content: 'This is the second story.' },
          ],
      replies: savedReplies,
    });
  }

  handleStoryChange = (event) => {
    this.setState({ newStoryContent: event.target.value });
  };

  handleStorySubmit = () => {
    const { newStoryContent, stories } = this.state;
    if (newStoryContent.trim() !== '') {
      const newStory = {
        id: Date.now(),
        title: `Story ${stories.length + 1}`,
        content: newStoryContent,
      };
      const updatedStories = [newStory, ...stories];
      this.setState({
        stories: updatedStories,
        newStoryContent: '',
      });
      localStorage.setItem('userStories', JSON.stringify(updatedStories));
    }
  };

  handleDelete = (id) => {
    const updatedStories = this.state.stories.filter((story) => story.id !== id);
    const updatedReplies = { ...this.state.replies };
    delete updatedReplies[id];

    this.setState({ stories: updatedStories, replies: updatedReplies });
    localStorage.setItem('userStories', JSON.stringify(updatedStories));
    localStorage.setItem('storyReplies', JSON.stringify(updatedReplies));
  };

  handleReplyChange = (storyId, value) => {
    this.setState((prevState) => ({
      replies: {
        ...prevState.replies,
        [storyId]: { ...(prevState.replies[storyId] || {}), draft: value },
      },
    }));
  };

  handleReplySubmit = (storyId) => {
    const draft = this.state.replies[storyId]?.draft;
    if (!draft || draft.trim() === '') return;

    const updatedStoryReplies = [
      ...(this.state.replies[storyId]?.messages || []),
      draft.trim(),
    ];

    const updatedReplies = {
      ...this.state.replies,
      [storyId]: {
        messages: updatedStoryReplies,
        draft: '',
      },
    };

    this.setState({ replies: updatedReplies });
    localStorage.setItem('storyReplies', JSON.stringify(updatedReplies));
  };

  render() {
    const { stories, newStoryContent, replies } = this.state;

    return (
      <div>
        {/* Header Section */}
        <section className="container text-center mb-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <header className="header-text">
                <p className="display-4 text-success mb-5">
                  Let’s create a community where mental health is embraced, voices are heard, and healing begins.
                </p>
              </header>
            </div>
            <div className="col-md-4">
              <img src={forum} alt="Life" className="img-fluid" />
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section>
          <div className="form-group mb-4">
            <textarea
              id="New-Story"
              rows={8}
              className="form-control bg-light p-3"
              placeholder="Express your feelings..."
              style={{ fontSize: '24px' }}
              value={newStoryContent}
              onChange={this.handleStoryChange}
            />
            <button
              type="submit"
              className="btn btn-success rounded-pill px-5 py-2 fw-bold mt-3"
              onClick={this.handleStorySubmit}
            >
              SEND
            </button>
          </div>
        </section>

        {/* Stories */}
        <section className="container my-5">
          <h2 className="mb-4 text-success">Shared Stories</h2>
          {stories.map((story) => (
            <div key={story.id} className="card mb-4 p-3 shadow-sm">
              <p className="card-text">{story.content}</p>

              {/* Replies */}
              {replies[story.id]?.messages?.length > 0 &&
                replies[story.id].messages.map((reply, idx) => (
                  <div key={idx} className="alert alert-secondary mt-2">
                    <strong>Reply:</strong> {reply}
                  </div>
                ))}

              {/* Reply input */}
              <textarea
                rows="2"
                className="form-control mt-3"
                placeholder="Write a reply..."
                value={replies[story.id]?.draft || ''}
                onChange={(e) => this.handleReplyChange(story.id, e.target.value)}
              />
              <button
                className="btn btn-outline-primary btn-sm mt-2"
                onClick={() => this.handleReplySubmit(story.id)}
              >
                Send Reply
              </button>

              {/* Delete Button */}
              <button
                className="btn btn-danger btn-sm rounded-pill mt-3"
                onClick={() => this.handleDelete(story.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Stories;
