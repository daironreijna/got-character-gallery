import { render, screen } from '@testing-library/react';
import Character from '../components/Character';
import checkPropTypes from 'check-prop-types';

// Optional function
const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );

    expect(propError).toBeUndefined();
};

// We'll reuse these props
const characterProps = {
    family: 'Targaryans',
    fullName: 'Viserys Targaryn',
    imageUrl: 'https://thronesapi.com/assets/images/viserys-targaryan.jpg',
    title: 'King Viserys III'
};

describe('<Character/> component', () => {
    // Prompt 2: The component Renders
    it('renders without error', () => {
        render(<Character />);

        const characterHeading = screen.getByRole('heading', { level: 2 });
        expect(characterHeading).toBeDefined();
    });

    // Prompt 3: Should render a img tag with a role of presentation
    it('renders an img tag with a role of presentation and the correct name', () => {
        render(<Character { ...characterProps } />);

        const characterImg = screen.getByRole('presentation', { name: characterProps.fullName });
        expect(characterImg).toBeDefined();
    });

    // Prompt 4: Should render the correct title
    it('renders a heading with the correct title', () => {
        render(<Character { ...characterProps } />);

        const characterHeading = screen.getByRole('heading', { level: 2 });
        expect(characterHeading.textContent).toBe('King Viserys III Viserys Targaryn of Targaryans');
    });
});

describe('<Character/> PropTypes Tests', () => {
    it('does not throw error when expected props are passed', () => {
        const expectedProps = {
            "id": 0,
            "firstName": "Jon",
            "lastName": "Snow",
            "fullName": "Jon Snow",
            "title": "King of the North",
            "family": "House Stark",
            "image": "jon-snow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
        };

        const propError = checkPropTypes(
            Character.propTypes,
            expectedProps,
            'prop',
            Character.name
        );

        expect(propError).toBeUndefined();
    })

    //Optional Test Prompt #6
    it('does not throw error when expected props are passed - Optional Test', () => {
        const expectedProps = {
            "id": 0,
            "firstName": "Jon",
            "lastName": "Snow",
            "fullName": "Jon Snow",
            "title": "King of the North",
            "family": "House Stark",
            "image": "jon-snow.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg"
        };
        checkProps(Character, expectedProps);
    });
})