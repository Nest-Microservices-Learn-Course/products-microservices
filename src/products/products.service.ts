import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/commons';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    const totalPages = await this.prisma.product.count({
      where: { available: true },
    });
    const lastPage = Math.ceil(totalPages / limit!);

    const products = await this.prisma.product.findMany({
      where: { available: true },
      skip: (page! - 1) * limit!,
      take: limit!,
    });
    return {
      data: products,
      meta: { total: totalPages, page, lastPage },
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id, available: true },
    });

    if (!product) {
      throw new RpcException({
        message: `Product with id #${id} not found`,
        status: HttpStatus.BAD_REQUEST,
      });
    }

    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const { id, ...data } = updateProductDto;
    await this.findOne(id);
    return this.prisma.product.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    //   return this.prisma.product.delete({
    //     where: { id },
    //   });
    // }

    await this.findOne(id);
    const product = await this.prisma.product.update({
      where: { id },
      data: {
        available: false,
      },
    });
    return product;
  }
}
