import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fecht', () => {
    test('should de traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
     test('should de traer 10 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
