import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: {
    getPostsWithPagination: jest.Mock;
    getPostWithPostId: jest.Mock;
    savePost: jest.Mock;
    login: jest.Mock;
  };

  beforeEach(async () => {
    appService = {
      getPostsWithPagination: jest.fn(),
      getPostWithPostId: jest.fn(),
      savePost: jest.fn(),
      login: jest.fn(),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: AppService, useValue: appService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should request paginated posts', () => {
    appController.getPostsWithPagination('2');

    expect(appService.getPostsWithPagination).toHaveBeenCalledWith(2);
  });

  it('should request a post by id', () => {
    appController.getPostWithPostId('post-id');

    expect(appService.getPostWithPostId).toHaveBeenCalledWith('post-id');
  });

  it('should save a post', () => {
    const payload = {
      title: 'title',
      subTitle: 'subtitle',
      thumbnail: 'thumbnail.png',
      content: 'content',
      authorId: 'author-id',
    };

    appController.savePost(payload);

    expect(appService.savePost).toHaveBeenCalledWith(payload);
  });

  it('should return uploaded image filename', () => {
    const filename = appController.uploadImage({
      filename: 'image.png',
    } as Express.Multer.File);

    expect(filename).toBe('image.png');
  });

  it('should store logged-in user in session', async () => {
    const user = {
      id: 'user-id',
      name: 'user',
      loginAt: new Date(),
    };
    const payload = {
      name: 'user',
      password: 'password',
    };
    const request = { session: {} };

    appService.login.mockResolvedValue(user);

    await expect(appController.login(payload, request as never)).resolves.toBe(
      user,
    );
    expect(request.session).toEqual({ user });
  });
});
