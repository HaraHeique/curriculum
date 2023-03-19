import './Contact.css';

import contactData from '../../assets/data/contact.data';

import Breadcrumb from '../../components/Breadcrumb';

const Contact = () => {
  const formatedEmails = contactData.emails.join('<br/>');

  return (
    <main className="contact">
      <section className="content">
        <Breadcrumb currentPage={Contact.name} />
        <article className="personal-informations">
          <h1>Contact</h1>
          <section className="email">
            <h3>E-mails:</h3>
            <p dangerouslySetInnerHTML={{ __html: formatedEmails }}></p>
          </section>
          <section className="telefone">
            <h3>Phone Number:</h3>
            <p>{contactData.phoneNumber}</p>
          </section>
          <section className="rede-social">
            <h3>Social Networks:</h3>
            {
              contactData.socialNetworks.map(social => (
                <a key={social.name} href={social.profileLink} target="_blank" title={social.title}>
                  <i className={social.faIconClass} aria-hidden="true"></i>
                </a>
              ))
            }
          </section>
        </article>
      </section>
    </main>
  );
};

export default Contact;