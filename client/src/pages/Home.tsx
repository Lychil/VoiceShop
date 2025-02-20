import styled from 'styled-components';
import ProductSection from '../common/components/ProductSection';
import VoiceListener from '../common/components/shared/VoiceListener';

const Wrapper = styled('div')``;

export default function Home() {
    return (
        <Wrapper>
            <VoiceListener />
            <ProductSection />
        </Wrapper>
    )
}
