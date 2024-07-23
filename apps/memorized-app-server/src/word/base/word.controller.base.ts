/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WordService } from "../word.service";
import { WordCreateInput } from "./WordCreateInput";
import { Word } from "./Word";
import { WordFindManyArgs } from "./WordFindManyArgs";
import { WordWhereUniqueInput } from "./WordWhereUniqueInput";
import { WordUpdateInput } from "./WordUpdateInput";
import { CardFindManyArgs } from "../../card/base/CardFindManyArgs";
import { Card } from "../../card/base/Card";
import { CardWhereUniqueInput } from "../../card/base/CardWhereUniqueInput";

export class WordControllerBase {
  constructor(protected readonly service: WordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Word })
  async createWord(@common.Body() data: WordCreateInput): Promise<Word> {
    return await this.service.createWord({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        word: true,
        definition: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Word] })
  @ApiNestedQuery(WordFindManyArgs)
  async words(@common.Req() request: Request): Promise<Word[]> {
    const args = plainToClass(WordFindManyArgs, request.query);
    return this.service.words({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        word: true,
        definition: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Word })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async word(
    @common.Param() params: WordWhereUniqueInput
  ): Promise<Word | null> {
    const result = await this.service.word({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        word: true,
        definition: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Word })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWord(
    @common.Param() params: WordWhereUniqueInput,
    @common.Body() data: WordUpdateInput
  ): Promise<Word | null> {
    try {
      return await this.service.updateWord({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          word: true,
          definition: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Word })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWord(
    @common.Param() params: WordWhereUniqueInput
  ): Promise<Word | null> {
    try {
      return await this.service.deleteWord({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          word: true,
          definition: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/cards")
  @ApiNestedQuery(CardFindManyArgs)
  async findCards(
    @common.Req() request: Request,
    @common.Param() params: WordWhereUniqueInput
  ): Promise<Card[]> {
    const query = plainToClass(CardFindManyArgs, request.query);
    const results = await this.service.findCards(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        prompt: true,
        blank: true,

        word: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cards")
  async connectCards(
    @common.Param() params: WordWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        connect: body,
      },
    };
    await this.service.updateWord({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cards")
  async updateCards(
    @common.Param() params: WordWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        set: body,
      },
    };
    await this.service.updateWord({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cards")
  async disconnectCards(
    @common.Param() params: WordWhereUniqueInput,
    @common.Body() body: CardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cards: {
        disconnect: body,
      },
    };
    await this.service.updateWord({
      where: params,
      data,
      select: { id: true },
    });
  }
}