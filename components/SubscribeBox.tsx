type SubscribeBoxProps = {
  signupUrl?: string;
};

/** Configure only with the provider's verified signup URL after account setup. */
export default function SubscribeBox({ signupUrl }: SubscribeBoxProps) {
  if (!signupUrl) return null;

  return (
    <section className="newsletter-box" aria-labelledby="newsletter-heading">
      <p className="newsletter-box__eyebrow">THE MONDAY REPORT</p>
      <h2 id="newsletter-heading">Markets, with the work shown.</h2>
      <p>
        Gold, bonds, bitcoin, US tech, and one chart worth your time.
        Get the Monday macro report and new articles in your inbox.
      </p>
      <a className="newsletter-box__button" href={signupUrl}>
        Subscribe free
      </a>
      <p className="newsletter-box__note">
        Free. Unsubscribe anytime.
      </p>
    </section>
  );
}
