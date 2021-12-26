import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

function Share(props) {
  const { url, facebook, twitter, linkedin, tumblr, whatsapp, email } = props;
  return (
    <div className="social-icons social-icons-sm">
      <span className="social-label">Share:</span>

      {facebook ? (
        <FacebookShareButton className="social-icon" title="Facebook" url={url}>
          <a href="/" className="social-icon" title="Facebook">
            <i className="lab la-facebook-f"></i>
          </a>
        </FacebookShareButton>
      ) : (
        ''
      )}

      {twitter ? (
        <TwitterShareButton className="social-icon" title="Twitter" url={url}>
          <a href="/" className="social-icon" title="Twitter">
            <i className="lab la-twitter"></i>
          </a>
        </TwitterShareButton>
      ) : (
        ''
      )}

      {linkedin ? (
        <LinkedinShareButton className="social-icon" title="Linkedin" url={url}>
          <a href="/" className="social-icon" title="Linkedin">
            <i className="lab la-linkedin-in"></i>
          </a>
        </LinkedinShareButton>
      ) : (
        ''
      )}

      {tumblr ? (
        <TumblrShareButton className="social-icon" title="Tumblr" url={url}>
          <a href="/" className="social-icon" title="Tumblr">
            <i class="lab la-tumblr"></i>
          </a>
        </TumblrShareButton>
      ) : (
        ''
      )}

      {whatsapp ? (
        <WhatsappShareButton className="social-icon" title="Whatsapp" url={url}>
          <a href="/" className="social-icon" title="Whatsapp">
            <i class="lab la-whatsapp"></i>
          </a>
        </WhatsappShareButton>
      ) : (
        ''
      )}

      {email ? (
        <EmailShareButton className="social-icon" title="Pinterest" url={url}>
          <a href="/" className="social-icon" title="Email">
            <i class="las la-envelope"></i>
          </a>
        </EmailShareButton>
      ) : (
        ''
      )}
    </div>
  );
}

export default Share;
