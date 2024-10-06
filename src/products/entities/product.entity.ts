import { ApiProperty } from "@nestjs/swagger";
import { Provider } from "src/providers/entities/provider.entity";
import { Entity,Column, ManyToOne, PrimaryGeneratedColumn, IsNull, JoinColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    productId: string;

    @ApiProperty({
        default: "Barcel Rufles"
    })
    @Column({type: "text"})
    productName: string;

    @ApiProperty({
        default: 14.50
    })
    @Column({type: "float"})
    price: number;

    @ApiProperty({
        default: 13
    })
    @Column({type: "int"})
    countSeal: number;

    @ManyToOne(() => Provider, (provider) => provider.products,{
        //eager: true,
    })
    @JoinColumn({
        name: "providerId"
    })
    provider: Provider
}
