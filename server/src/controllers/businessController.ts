import Business from '../models/Business';
import { Request, Response } from 'express';

export const createBusiness = async (req: Request, res: Response) => {
    const business = new Business(req.body);
    await business.save();
    res.json(business);
};

export const getBusinesses = async (_: Request, res: Response) => {
    const businesses = await Business.find();
    res.json(businesses);
};

export const deleteBusiness = async (req: Request, res: Response) => {
    await Business.findByIdAndDelete(req.params.id);
    res.json({ message: 'Business removed' });
};
