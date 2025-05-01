import React, { Component } from 'react';
import forum from '../../images/forum.jpg';
import './Stories.css'; // Assuming you have a CSS file for styling

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      newStoryContent: '', // نص القصة الجديد
    };
  }

  componentDidMount() {
    this.setState({
      stories: [
        { id: 1, title: 'Story 1', content: 'This is the first story.' },
        { id: 2, title: 'Story 2', content: 'This is the second story.' },
      ],
    });
  }

  handleStoryChange = (event) => {
    this.setState({ newStoryContent: event.target.value });
  };

  handleStorySubmit = () => {
    const { newStoryContent, stories } = this.state;
    if (newStoryContent.trim() !== '') {
      const newStory = {
        id: stories.length + 1,
        title: `Story ${stories.length + 1}`,
        content: newStoryContent,
      };
      this.setState({
        stories: [...stories, newStory],
        newStoryContent: '', // امسح الفورم بعد الإرسال
      });
    }
  };

  render() {
    const { stories, newStoryContent } = this.state;

    return (
      <div>
        <section className="container text-center mb-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <header className="header-text">
                <p className="display-4 text-success mb-5">
                  Let’s create a community where mental health is embraced,
                  voices are heard, and healing begins. Your well-being matters,
                  and together we can foster a supportive environment for growth,
                  understanding, and strength.
                </p>
              </header>
            </div>
            <div className="col-md-4">
              <img src={forum} alt="Life Image" className="img-fluid" />
            </div>
          </div>
        </section>

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

        {/* عرض القصص */}
        <section className="container my-5">
          <h2 className="mb-4 text-success">Shared Stories</h2>
          {stories.map((story) => (
            <div key={story.id} className="card mb-3 p-3 shadow-sm">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">{story.content}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Stories;
