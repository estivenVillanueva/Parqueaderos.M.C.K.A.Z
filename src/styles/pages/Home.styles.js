import { styled, keyframes } from '@mui/material';
import { Box, Container, Paper, Button } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shine = keyframes`
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
`;

// Primero definimos IconWrapper ya que será usado dentro de StyledPaper
export const IconWrapper = styled(Box)`
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);

  svg {
    font-size: 48px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }
`;

export const HeroSection = styled(Box)`
  background-image: linear-gradient(135deg, rgba(37, 99, 235, 0.85), rgba(29, 78, 216, 0.85)), 
    url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #ffffff, #e3f2fd, #ffffff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shine} 3s linear infinite;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);

    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
    animation: ${fadeIn} 1s ease-out;
  }
`;

export const StyledContainer = styled(Container)`
  padding: 0 24px;
  max-width: 100% !important;
  width: 100%;
  position: relative;
  z-index: 1;
  
  @media (min-width: 1200px) {
    max-width: 1400px !important;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(37, 99, 235, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-16px);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
    border-color: rgba(37, 99, 235, 0.2);

    ${IconWrapper} {
      transform: scale(1.1) rotate(10deg);
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
    }
  }

  h3 {
    color: #1e293b;
    margin: 1.5rem 0 1rem;
    font-weight: 700;
  }

  p {
    color: #64748b;
    line-height: 1.6;
  }
`;

export const FeatureSection = styled(Box)`
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  padding: 100px 0;
  width: 100%;

  h2 {
    margin-bottom: 3rem;
    color: #1e293b;
    font-weight: 800;
    text-align: center;
    animation: ${fadeIn} 1s ease-out;
  }
`;

export const CTASection = styled(Box)`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 80px 0;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  }

  h3 {
    font-weight: 800;
    margin-bottom: 1.5rem;
    animation: ${fadeIn} 1s ease-out;
  }

  h6 {
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    animation: ${fadeIn} 1s ease-out 0.2s backwards;
  }
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  color: #2563eb;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 32px;
  border-radius: 16px;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 3s infinite ease-in-out;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);

  &:hover {
    background: #ffffff;
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.3);
  }

  &:active {
    transform: translateY(-2px);
  }
`; 