import Title from "../../components/dumbs/Title";
import Text from "../../components/dumbs/Text";
import Link from "../../components/dumbs/Link";
import Header from "../../components/smart/Header";
import Footer from "../../components/dumbs/Footer";
import SearchInput from "../../components/smart/SearchInput";

function Error() {
  return (
    <>
      <Header />
      <Title>Esta página não está disponível.</Title>
      <Text>
        O link que você acessou pode estar quebrado ou a página pode ter sido
        removida.
      </Text>
      <Link href="/">Voltar para o Instagram.</Link>
      <Footer>
        <Link href="https://about.facebook.com/meta">Meta</Link>
        <Link href="https://about.instagram.com/">About</Link>
        <Link href="https://about.instagram.com/blog/">Blog</Link>
        <Link href="https://www.instagram.com/about/jobs/">Jobs</Link>
        <Link href="https://help.instagram.com/">Help</Link>
        <Link href="https://developers.facebook.com/docs/instagram">API</Link>
        <Link href="https://www.instagram.com/legal/privacy/">Privacy</Link>
        <Link href="https://www.instagram.com/legal/terms/">Terms</Link>
        <Link href="https://www.instagram.com/directory/profiles/">Top Accounts</Link>
        <Link href="https://www.instagram.com/directory/hashtags/">Hashtags</Link>
        <Link href="https://www.instagram.com/explore/locations/">Locations</Link>
      </Footer>
    </>
  );
}

export default Error;
